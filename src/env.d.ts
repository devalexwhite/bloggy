/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "virtual:goatcounter-hits" {
	const data: { hits: Array<{ path: string; count: number }> } | null;
	export default data;
}

interface ImportMetaEnv {
	readonly WEBMENTION_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
