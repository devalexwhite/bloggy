import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site-config";
import { absoluteUrl } from "@/utils/path";
import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export const GET = async () => {
	const posts = await getAllPosts();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: absoluteUrl("/", import.meta.env.SITE),
		items: posts.map((post) => {
			const postUrl = absoluteUrl(`posts/${post.id}/`, import.meta.env.SITE);
			let content = sanitizeHtml(parser.render(post.body || ""), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			});

			if (post.data.readOnWeb) {
				content = `<p>While most of my posts work great in RSS readers, this post contains elements that do not work so well! Please view the post on my site here: <a href="${postUrl}">${postUrl}</a></p><br/><hr><br/><h2>Post summary</h2><p>${post.data.description}</p>`;
			}

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.publishDate,
				link: `posts/${post.id}/`,
				content,
			};
		}),
	});
};
