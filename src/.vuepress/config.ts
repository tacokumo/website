import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/website/",

  locales: {
    "/": {
      lang: "ja-JP",
      title: "TACOKUMO",
      description: "TACOKUMOの世界へようこそ",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
