const package = require("./package.json");

module.exports = {
    appName: "jackpine",
    type: "theme",
    slug: "jackpine",
    bannerConfig: {
        name: package.name,
        author: package.author,
        license: package.license,
        link: package.homepage,
        version: package.version,
        copyrightText: "",
        credit: false,
    },
    files: [
        {
            name: "theme",
            entry: {
                styles: ["./styles/main.scss"],
                main: ["./scripts/main.mjs"],
            },
            webpackConfig: undefined,
        },
    ],
    outputPath: "dist",
    hasReact: false,
    hasSass: true,
    hasLess: false,
    hasFlow: false,
    externals: undefined,
    alias: undefined,
    errorOverlay: true,
    optimizeSplitChunks: true,
    watch: "./templates/**/*.twig",
    packageFiles: [
        "dist/**",
        "templates/**",
        "vendor/**",
        "*.md",
        "*.php",
        "LICENSE",
        "screenshot.png",
        "style.css",
    ],
    packageDirPath: "package",
};
