import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
const prettyCodeOptions: PrettyCodeOptions = {
  theme: 'solarized-light',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{
        type: "text",
        value: " "
      }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {}
};

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://sat0shi.dev",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    syntaxHighlight: false
  },
  integrations: [mdx(), tailwind(), prefetch()]
});