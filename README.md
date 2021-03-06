# neodymium template

> A full-featured neodymium stack setup.

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)

## Documentation

Common topics are discussed in the [docs](http://soixantecircuits.github.io/nd). Make sure to read it!

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init soixantecircuits/nd my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

- `npm start`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps
  - Autorun `npm run electron` in Electron enabled apps.

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run electron`: developpers friendly features when working in a dev environment.
  - Auto opens the devtools.

- `npm run package`: Package your app for distribution with [electron-packager](https://github.com/electron-userland/electron-packager).
  - Portable version of your app (NodeJS and WebKit embedded).
  - Package for Windows/OS X/Linux.
  - Remove all `devDependencies` from the packaged binary, reducing final size a lot.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

### Credits

This is originally a fork of the [webpack](https://github.com/vuejs-templates/webpack) template. Most credit goes to them! 👏

The neodymium stack was originally designed as a yeoman generator. You can take a look [here](https://github.com/soixantecircuits/neodymium).
