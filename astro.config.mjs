import { remarkReadingTime } from "./src/readingTime";
import { baseUrl } from "./data/config.json";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: baseUrl,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react(), icon(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    syntaxHighlight: "shiki",
    remarkRehype: {
      footnoteBackContent: "^",
    },
    remarkPlugins: [
      remarkMath,
      [
        remarkToc,
        {
          ordered: true,
        },
      ],
      remarkReadingTime,
    ],
    rehypePlugins: [rehypeKatex],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "IBM Plex Sans",
        cssVariable: "--font-ibm-plex-sans",
      },
      {
        provider: fontProviders.google(),
        name: "Lora",
        cssVariable: "--font-lora",
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
        cssVariable: "--font-fira-code",
      },
    ],
  },
});
