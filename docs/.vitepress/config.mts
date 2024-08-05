import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

const description = "An aid for learning and experimenting with Git.";
const title = "git-random";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: title,
  description: description,
  // https://vitepress.dev/reference/site-config#titletemplate
  titleTemplate: `:title :: ${title}`, // to change delimiter from default pipe to play nice with Fathom event id format. see also homepage frontmatter
  // https://vitepress.dev/reference/default-theme-last-updated
  lastUpdated: true,
  markdown: {
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
    config: (md) => {
      md.use(markdownItFootnote);
    },
  },
  // sitemap: {
  //   hostname: "https://git-random.olets.dev",
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: "https://github.com/olets/git-random/edit/main/docs/:path",
    },

    nav: [
      {
        text: "Source, Contributing, Changelog, License",
        link: "https://github.com/olets/git-random/",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://olets.dev",
        target: "_self",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      { text: "Overview", link: "/" },
      { text: "Installation", link: "/installation" },
      { text: "Usage", link: "/usage" },
      { text: "Options", link: "/options" },
      {
        text: "Examples",
        items: [
          {
            text: "Practice rebasing",
            link: "/examples/practice-rebasing",
          },
          {
            text: "Practice conflict resolution",
            link: "/examples/practice-conflict-resolution",
          },
          {
            text: "Follow along with Git's docs",
            link: "/examples/follow-along-with-gits-docs",
          },
        ],
      },
      { text: "Contributing", link: "/contributing" },
      { text: "Acknowledgments", link: "/acknowledgments" },
    ],
  },
});
