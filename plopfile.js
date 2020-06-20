const package = require("./package.json");

const name = new RegExp("Jackpine", "g");
const description = new RegExp(package.description, "g");
const author = new RegExp(package.author, "g");

module.exports = plop => {
    plop.setGenerator("whitelabel", {
        description: "Whitelabels / renames the theme.",
        prompts: [
            {
                type: "input",
                name: "name",
                default: "Jackpine",
                message: "What is your theme's name?",
            },
            {
                type: "input",
                name: "description",
                default: "WordPress for the '20s.",
                message: "Type a description of your theme:",
            },
            {
                type: "input",
                name: "author",
                default: "45 North Ventures",
                message: "What is your name?",
            },
        ],
        actions: [
            {
                type: "modify",
                path: "style.css",
                pattern: name,
                template: "{{name}}",
            },
            {
                type: "modify",
                path: "style.css",
                pattern: description,
                template: "{{description}}",
            },
            {
                type: "modify",
                path: "style.css",
                pattern: author,
                template: "{{author}}",
            },
            {
                type: "modify",
                path: "404.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "archive.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "author.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "footer.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "functions.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "functions.php",
                pattern: name,
                template: "{{author}}",
            },
            {
                type: "modify",
                path: "header.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "index.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "page.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "search.php",
                pattern: name,
                template: "{{pascalCase name}}",
            },
            {
                type: "modify",
                path: "sidebar.php",
                pattern: name,
                template: "{{pascalCase name}}",
            }
        ],
    });
};
