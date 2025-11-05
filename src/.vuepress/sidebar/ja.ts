import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/": [
    {
      text: "User Guide",
      icon: "book",
      prefix: "user-guide/",
      children: "structure",
    },
    {
      text: "Operator Guide",
      icon: "book",
      prefix: "operator-guide/",
      children: "structure",
    },
    {
      text: "Developer Guide",
      icon: "book",
      prefix: "developer-guide/",
      children: "structure",
    },
    {
      text: "Disclaimer",
      icon: "warning",
      prefix: "disclaimer/",
      children: "structure",
    },

  ],
});
