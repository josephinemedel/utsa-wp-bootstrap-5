# WP Foundation Six Developer Framework

The WordPress Foundation 6 Developer Framework is meant to be a starting point for developers to create projects without having third party code/modules within their git repo. This project uses [Composer](https://getcomposer.org/) to install [WordPress](https://wordpress.org/) and default plugins as project dependencies. The base theme uses [NPM](https://www.npmjs.com/) to install script dependencies, and [Gulp](http://gulpjs.com/) as the build system. Gulp also uses [Babel](http://babeljs.io/) and [Webpack](https://webpack.github.io/) to transpile ES6/ES2015 to ES5 so that you can use the latest [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) syntax.

## TL;DR

### Setup

-   `git clone https://github.com/Blake-C/utsa-wp-bootstrap-5.git your-project-name`
-   `cd your-project-name`
-   `rm -rf .git`
-   `git init && git add -A`
-   `git commit -m "Initial Commit"`
-   `docker-compose up -d`
-   `docker container list -a` - get the id (############) of the general-cli container
-   `docker exec -it ############ zsh`

From here you have two options, auto or manual.

### Auto

-   `wp-init` - while in the general-cli container
    -   You can find the [script definition here](https://github.com/Blake-C/general-cli/blob/master/custom-scripts/global-scripts.zsh#L54).

### Manual Steps

-   `composer install`
-   `composer update`
-   `cd wp-content/themes/utsa-wp-bootstrap-5/`
-   `npm install`
-   `gulp`

## Access the database

-   site will load under [http://localhost](http://localhost)
    -   database under [http://localhost:8000](http://localhost:8000)
        -   server: mysql
        -   user: root
        -   password: root

## When done

-   `exit`
-   `docker-compose down`

## Project Documentation

[https://blake-c.github.io/utsa-wp-bootstrap-5/](https://blake-c.github.io/utsa-wp-bootstrap-5/)

Checkout the [changelog](https://github.com/Blake-C/utsa-wp-bootstrap-5/blob/master/CHANGELOG.md) for details on recent updates.
