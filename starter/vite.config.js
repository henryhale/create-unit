import { defineConfig } from "vite";
import unit from "vite-plugin-unit";

export default defineConfig({
    plugins: [unit({
        // pages: "pages/",
        // template: "template.html",
        // slot: "<slot></slot>"
    })]
});