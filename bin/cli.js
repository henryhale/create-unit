#!/usr/bin/env node

import { copy } from "fs-extra";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log, error } from "node:console";
import { bgGreen, white, green, red } from 'yoctocolors';
import { magenta } from "yoctocolors";

const [, , dest] = process.argv;
const src = join(dirname(fileURLToPath(import.meta.url)), "../starter");

async function createProject() {
    try {
        await copy(src, dest);
        await copy(`${src}/.gitignore`, `${dest}/.gitignore`);
        log(green(`[y] ${dest} created successfully! 🎉`));
    } catch (err) {
        error(red("[x] error creating project: " + err));
        process.exit();
    }
}

log(bgGreen(`   ${white("Unit.js")}   `));

log("[-] initializing...");

await createProject();

log(`[-] To get started:

    cd ${dest}
    npm install
    npm run dev 

${magenta("Happy Hacking! 🚀")}`);