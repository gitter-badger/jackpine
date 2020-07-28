# 🌲 Jackpine

[![Release](https://badgen.net/github/release/45-North-Ventures-LLC/jackpine/stable)](https://github.com/45-North-Ventures-LLC/jackpine/releases)
[![License](https://badgen.net/github/license/45-North-Ventures-LLC/jackpine)](https://github.com/45-North-Ventures-LLC/jackpine/blob/master/LICENSE)
[![Last Commit](https://badgen.net/github/last-commit/45-North-Ventures-LLC/jackpine/master?cache=300)](https://github.com/45-North-Ventures-LLC/jackpine/commits/master)
[![Issues](https://badgen.net/github/open-issues/45-North-Ventures-LLC/jackpine?cache=300)](https://github.com/45-North-Ventures-LLC/jackpine/issues)

Jackpine is a **WordPress starter theme** based on **Timber** with **modern developer tooling**.

We love WordPress 💖. It's how many of us got our start. But it's an old content management system, and efforts to keep things backwards-compatible have meant that developers had to put up with a subpar experience. Recently, theme frameworks like Gantry, Genesis, and Timber have breathed new life into the theme development space. We think Jackpine is the next step.

When you develop a theme based on Jackpine, you get the following setup out-of-the-box:

-   **Timber**, a library that lets you create WordPress templates using the Twig templating engine
-   **Tailwind CSS** for rapidly building beautiful designs
-   **Alpine.js** for adding reactivity to your frontend
-   **wpack.io**, an awesome tool for asset bundling with Webpack and live reloading with Browsersync (designed specifically for WordPress)
-   **Composer** and **Yarn** for modern dependency management

Because Jackpine is based on Timber, you have access to [all of their helper classes](https://timber.github.io/docs/reference/). As an added bonus, Timber plays nice with Advanced Custom Fields, allowing you to build themes for complex use cases.

Jackpine is also designed to **anticipate common WordPress plugins** that have their own CSS classes and allow for custom styling, so that you an achieve a bespoke look in any theme you build.

Jackpine is a great starting point for any WordPress developer or team who is looking to create themes quicker and easier using a modern workflow. It's deliberately opinionated when it comes to tooling, with deliberately _unopinionated_ base styling (so you can build whatever you want on top of it).

**Jackpine is 100% free and open source and released under the MIT license.**

## 🏗 Installation

Installing and configuring Jackpine for local development is pretty straightforward:

1. Clone the repository (or download the zip and extract it) into your `wp-content/themes` directory. Feel free to rename the folder to whatever you want for your site.
2. In the console, run `composer install` and `yarn install` to install your dependencies.
3. (Optional) Jackpine includes a plopfile that can automatically update the template files with your new theme's name, author name, and description. To run it, just type in `yarn run plop` and answer the questions.
4. Configure the wpack.io server by running `yarn run bootstrap` and answering the questions.
5. Activate your theme in the WordPress admin panel by going to Appearance > Themes.

Now you're set to build your theme!

## 🔨Development

The old way of developing a WordPress theme involved mixing HTML elements with PHP business logic. Timber separates those concerns through the use of Twig template files.

-   Modify the appearance of pages by editing the Twig files.
-   Style HTML elements by making use of Tailwind CSS's utility classes.
-   Add reactivity to components with Alpine.js.

To create page-specific templates, simply create a Twig file in the `templates` directory called `page-{page name}.twig`, where {page name} is the title of your page. Thanks to the magic of Timber, the template file will automatically be detected and applied.

Otherwise, the PHP files function just as they would in any other WordPress theme.

`style.css` is only used for your theme metadata.

Throughout the theme development process, you'll want to consult the docs for [Timber](https://timber.github.io/docs/), [Twig](https://twig.symfony.com/), [Tailwind CSS](https://tailwindcss.com/docs/installation), [Alpine.js](https://github.com/alpinejs/alpine), and [wpack.io](https://wpack.io/guides/).

### 🎨 SCSS Stubs

Jackpine includes **SCSS stubs** in the `\styles` directory to help you apply styling to Gutenberg blocks, form elements, and WooCommerce-specific classes. They're intended for use in conjunction with Tailwind CSS in the form of [component styling](https://tailwindcss.com/docs/extracting-components#keeping-things-composable). You can use them how you see fit (or not at all).

Because Jackpine comes with wpack, you'll have access to a Browsersync-enabled local development server that will update every time you make a change to your SCSS or Twig files.

### 🖥 Development Server

Just run `yarn run start` to start the development server. You can tell wpack to manually recompile by pressing "r" at any time. Pressing "q" will force-quit.

Browsersync will expose an IP address that can be used by other devices on your network. This is really useful for previewing how your site will look on different-sized devices.

## 🚀 Deployment

To package your finished theme for deployment:

1. Build your production assets bundle by running `yarn run build`.
2. Run `yarn run package` to create a zip file of your theme.
3. Locate the zip file in the `package` directory and upload it to your server.

**Advanced:**

If you have additional files that need to go in the zip file that wpack generates, you can specify them in the `packageFiles` section of your `wpackio.project.js` file.

Tailwind CSS includes PurgeCSS. It's set up to check your Twig files and detect which classes you've used, and include only the necessary ones in your production bundle. You can adjust these settings in `tailwind.config.js`.

## 💖 Contributing

If you're interested in contributing to Jackpine as an open source project, feel free to check out our Contributor Guidelines and jump in! You can support Jackpine in other ways, too, like:

⭐ Starring this project in GitHub

🤝 Sharing themes you've built with Jackpine with us so we can showcase them

🐥 Tweeting about Jackpine and mentioning it to your friends and colleagues

🧙‍♂️ Answering questions in GitHub issues the support channel on our Gitter (coming soon)

---

🌲 Jackpine was originally created by [Aedon Tanner](https://github.com/aedontanner) and [Dylan Layne Tanner](https://twitter.com/DylanLTanner) of [45° North Ventures](https://www.45northventures.com/).

Special thanks goes to the creators of Timber, Tailwind CSS, Alpine.js, and wpack.io for their awesome work.
