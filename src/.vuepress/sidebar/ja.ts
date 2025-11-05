import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/": [
    {
      text: "User Guide",
      icon: "book",
      prefix: "website/user-guide/",
      children: "structure",
    },
    {
      text: "Operator Guide",
      icon: "book",
      prefix: "website/operator-guide/",
      children: "structure",
    },
    {
      text: "Developer Guide",
      icon: "book",
      prefix: "website/developer-guide/",
      children: "structure",
    },
    {
      text: "Disclaimer",
      icon: "warning",
      prefix: "website/disclaimer/",
      children: "structure",
    },

  ],
});
