import { hopeTheme } from "vuepress-theme-hope";

import { jaNavbar} from "./navbar/index.js";
import { jaSidebar} from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://tacokumo.github.io/website",

  author: {
    name: "TACOKUMO Maintainers",
    url: "https://github.com/orgs/tacokumo/teams/tacokumo-maintainer",
  },

  logo: "website/assets/image/tacokumo.png",

  repo: "tacokumo/website",

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: jaNavbar,

      // sidebar
      sidebar: jaSidebar,

      footer: "Default footer",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // install mermaid before enabling it
    mermaid: true,

  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

  },
});
