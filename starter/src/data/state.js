export function defineState(Alpine) {
    
    const baseURL = "./";

    // https://alpinejs.dev/essentials/state#re-usable-data
    Alpine.data("app", () => ({
        logo: baseURL + "javascript.svg",
        brand: "Unit.js",
        github: "https://github.com/henryhale/create-unit",
        links: [
            { name: "Home", href: baseURL },
            { name: "About", href: baseURL + "about.html" },
            { name: "Example", href: baseURL + "example.html" },
        ]
    }));

};

export function defineTodoAppState(Alpine) {
    
    //https://alpinejs.dev/essentials/state#re-usable-data
    Alpine.data("todo", () => ({
        note: null,
        list: []
    }));
}