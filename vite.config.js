import { readdirSync, statSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

let out = {
  "index.html": resolve(__dirname, `src/index.html`),
};
readdirSync(`${__dirname}/src`)
  .filter((f) => statSync(resolve(__dirname, `src/${f}`)).isDirectory())
  .forEach((d) => {
    console.log(d);
    out = {
      ...out,
      [d]: resolve(__dirname, `src/${d}/index.html`),
    };
  });

export default defineConfig({
  root: "src/",
  plugins: [glsl()],
  publicDir: "../public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: out,
    },
    emptyOutDir: true,
  },
});
