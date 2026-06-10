import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Alex White",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
    webmentions: {
      link: "https://webmention.io/thatalexguy.dev/webmention",
      pingback: "https://webmention.io/thatalexguy.dev/xmlrpc"
    },
	description:
		"I'm Alex, an old-school maker of technology things. I make software, shoot photos and hack on vintage computers.",
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "ThatAlexGuy",
	hideThemeCredit: true,
	profile: {
		name: "Alex White",
		email: "hi@thatalexguy.dev",
		codeberg: "https://codeberg.org/thatalexguy",
		jobTitle: "Engineering Manager",
		alumni: "Ohio University",
		avatar: "/avatar.webp",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	comments: {
		repo: "devalexwhite/bloggy",
		repoId: "R_kgDOS0wh8w",
		category: "General",
		categoryId: "DIC_kwDOS0wh884C-2WS",
	},
	// Uncomment to enable analytics. Both providers load via Partytown.
	analytics: {
		// googleAnalyticsId: "G-XXXXXXX",
		goatcounterUrl: "https://thatalexguy.goatcounter.com/count",
	},
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/posts/",
		title: "Posts",
	},
	{
		path: "/showcase/",
		title: "Showcase",
	},
	{
		path: "/about/",
		title: "About",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
