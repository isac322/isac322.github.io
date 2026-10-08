import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://cv.bhyoo.com",
	output: "static",
	build: {
		inlineStylesheets: "always",
	},
});
