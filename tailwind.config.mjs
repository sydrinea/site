import defaultTheme from "tailwindcss/defaultTheme";

const accent = "lavender";
const linkColor = "blue";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "data/config.json",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["Recursive Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: 'Lora, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
            },
            "--tw-prose-body": theme("colors.text.DEFAULT"),
            "--tw-prose-headings": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-lead": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme(`colors.${linkColor}.DEFAULT`),
            "--tw-prose-bold": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-counters": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-hr": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-captions": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-pre-bg": theme(`colors.base.DEFAULT`),
            "--tw-prose-th-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-body": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-bullets": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-hr": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-quotes": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-quote-borders": theme(
              `colors.${accent}.DEFAULT`
            ),
            "--tw-prose-invert-captions": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-td-borders": theme(`colors.${accent}.DEFAULT`),
          },
        },
      }),
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
