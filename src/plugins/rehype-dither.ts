import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";
import sharp from "sharp";
import type { Plugin } from "unified";
import type { Root } from "hast";

async function ditherImageToWebp(inputPath: string, outputPath: string) {
	const image = sharp(inputPath);
	const { data, info } = await image
		.greyscale()
		.raw()
		.toBuffer({ resolveWithObject: true });

	const width = info.width;
	const height = info.height;

	const pixels = new Float32Array(data.length);
	for (let i = 0; i < data.length; i++) {
		pixels[i] = data[i];
	}

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const idx = y * width + x;
			const oldPixel = pixels[idx];
			const newPixel = oldPixel < 128 ? 0 : 255;
			data[idx] = newPixel;
			const quantError = oldPixel - newPixel;

			if (x + 1 < width) pixels[idx + 1] += (quantError * 7) / 16;
			if (y + 1 < height) {
				if (x - 1 >= 0) pixels[idx + width - 1] += (quantError * 3) / 16;
				pixels[idx + width] += (quantError * 5) / 16;
				if (x + 1 < width) pixels[idx + width + 1] += (quantError * 1) / 16;
			}
		}
	}

	await sharp(data, {
		raw: {
			width: width,
			height: height,
			channels: 1,
		},
	})
		.webp({ lossless: true })
		.toFile(outputPath);
}

export const rehypeDither: Plugin<[], Root> = () => {
	return async (tree, file) => {
		const frontmatter = (file.data as any).astro?.frontmatter || {};
		
		if (frontmatter.dither === false) {
			return;
		}

		const imageNodes: any[] = [];
		visit(tree, "element", (node: any) => {
			if (node.tagName === "img" && node.properties && typeof node.properties.src === "string") {
				if (node.properties.src.startsWith("/")) {
					imageNodes.push(node);
				}
			}
		});

		for (const node of imageNodes) {
			const src = node.properties.src;
			const publicDir = path.join(process.cwd(), "public");
			const inputPath = path.join(publicDir, src);

			if (fs.existsSync(inputPath)) {
				const ext = path.extname(src);
				const basename = path.basename(src, ext);
				const dirname = path.dirname(src);
				
				const ditheredBasename = `${basename}-dithered.webp`;
				const ditheredSrc = `${dirname}/${ditheredBasename}`;
				const outputPath = path.join(publicDir, dirname, ditheredBasename);

				if (!fs.existsSync(outputPath)) {
					try {
						await ditherImageToWebp(inputPath, outputPath);
					} catch (e) {
						console.error(`Failed to dither image ${inputPath}:`, e);
						continue;
					}
				}

				const originalSrc = node.properties.src;
				// Update img to point to dithered version
				node.properties.src = ditheredSrc;

				// Wrap img in an <a> tag pointing to original
				const aNode = {
					type: "element",
					tagName: "a",
					properties: {
						href: originalSrc,
						target: "_blank",
						rel: "noopener noreferrer", // Good practice for target="_blank"
					},
					children: [{ ...node }],
				};

				// Replace the original node with the aNode in place
				Object.assign(node, aNode);
			}
		}
	};
};
