// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import rehypePrism from "rehype-prism-plus";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  site: "https://sat0shi.dev",
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypePrism],
    shikiConfig: {
      theme: "nord",
      langs: ["typescript", "ts", "tsx"],
      wrap: true,
    },
  },
});
