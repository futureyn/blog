import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://futureyn.github.io",
  base: "/blog",
  integrations: [
    starlight({
      title: "Orion",
      social: {
        github: "https://github.com/futureyn/blog/issues",
      },
      sidebar: [
        {
          label: "前端",
          autogenerate: { directory: "frontend" },
        },
        {
          label: "算法",
          autogenerate: { directory: "algorithm" },
        },
        {
          label: "git",
          autogenerate: { directory: "git" },
        },
        {
          label: "后端",
          autogenerate: { directory: "backend" },
        },
        {
          label: "npm",
          autogenerate: { directory: "npm" },
        },
        {
          label: "HTTP",
          autogenerate: { directory: "http" },
        },
        {
          label: "运维",
          autogenerate: { directory: "devops" },
        },
        {
          label: "数据库",
          autogenerate: { directory: "mysql" },
        },
        {
          label: "其他",
          autogenerate: { directory: "other" },
        },
        {
          label: "组件封装",
          autogenerate: { directory: "customComponents" },
        },
        {
          label: "技术生态",
          autogenerate: { directory: "techEco" },
        },
        {
          label: "学习",
          autogenerate: { directory: "study" },
        },
      ],
    }),
  ],
});
