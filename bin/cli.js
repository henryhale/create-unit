#!/usr/bin/env node

import { copy, outputFile } from "fs-extra";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log, error } from "node:console";
import { white, green, red, bgYellow } from 'yoctocolors';
import { magenta } from "yoctocolors";

const [, , dest] = process.argv;
const src = join(dirname(fileURLToPath(import.meta.url)), "../starter");

async function createProject() {
    try {
        await copy(src, dest);
        await outputFile(`${dest}/.gitignore`, 'node_modules\ndist\n.unit');
        log(green(`[y] ${dest} created successfully! 🎉`));
    } catch (err) {
        error(red("[x] error creating project: " + err));
        process.exit();
    }
}

console.log(bgYellow(" ".repeat(11)));
console.log(bgYellow(white("  Unit.js  ")));
console.log(bgYellow(" ".repeat(11)));

log("[-] initializing...");

await createProject();

log(`[-] To get started:

    cd ${dest}
    npm install
    npm run dev 

${magenta("Happy Hacking! 🚀")}`);