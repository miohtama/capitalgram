# Capitalgram blog

This is a corporate website and blog based on [Evelenty example](https://github.com/11ty/eleventy-base-blog).

# Features 

* Netlify hosting

* MailerLite newsletter

* Custom theme based on Material Boostrap

* Google Sitemaps support 

* RSS feed 

# How to develop

As the site is very company-specific content, you mostly benefit about this repository
as an example for your own Eleventy based site.

Here are the instructions for running the project locally.

The project has been only built on OSX, though Windows should work in theory.

## Getting Started

### 1. Clone this Repository

### 2. Navigate to the directory

### 3. Install dependencies

```
npm install
```

### 4. Run Eleventy with Netlify helper

```
npx netlify dev
```

Or build and host locally for local development
```
npx eleventy --build
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
npx debug
```

## Testing MailerLite client

A small JavaScript lib is included to interact with MailerLite from Netlify server-side functions.

To test, write your MailerLite API key in a file called `mailerlite-apikey.txt` that is Gitignored.

Then run.

```sh
npm run test-mailerlite
```

## Testing Netlify server-side functions

To run server-side functions locally, write down the api key in gitignored `secrets/mailerlite-api-key.txt`.
Then you can export it as following:

```sh
export MAILERLITE_API_KEY=`cat secrets/mailerlite-api-key.txt`
npx netlify dev
```    

Then you can go directly to a function URL with your browser:

http://localhost:8888/api/newsletter

This should give you the reply

```
Method Not Allowed for newsletter subscriber
```

Test subscription with cURL:

```sh
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"foo@bar.com"}' \
  http://localhost:8888/api/newsletter
```  

Then you can proceed to try to do the newsletter subscription with a browser, on the webserver,
from the subscription form in the footer.

[More information about Netlify dev server](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlify-functions)

# Deploying in production on Netlify

* Toggle all optimisation options in Netlify's *Postprocessing* so you do not need to minify JS, CSS and images by hand

* Set environment variable for MailerLite API key

![Netlify environment](screenshots/netlify_environment.png)

# Lessons learned 

* The used [MDB - Material Design for Bootstrap](https://mdbootstrap.com/freebies/jquery/blog/) stylesheets are not that high quality - a lot of `!important` statements. Next time I will go with alternative [Material Design for Boostrap](https://fezvrasta.github.io/bootstrap-material-design/)

# Random links

## Netlify

Netlify integration was inspired by Phil Hawksworth's example [How to run Netlify and Eleventy locally in the same server](https://github.com/philhawksworth/eleventyone).

It uses [cross-env](https://www.npmjs.com/package/cross-env) to set environment variable `ELEVENTY_ENV` compatible manner across Windows and Unixes.

`src/data` folder is split to `dev` and `prod` configs. `.eleventy.js` chooses between these configs.

Note that the separation of environments is not currently used for anything.

## Logo

The logo is this free clipart https://freesvg.org/paper-plane-silhouette

## Fonts

Logo: [Cinzel](https://fonts.google.com/specimen/Cinzel)

Heading: [Exo 2](https://fonts.google.com/specimen/Exo+2)

Body: [Roboto](https://fonts.google.com/specimen/Roboto)

## Colors

As given by Material palette generator

Primary #eeb302

P - light #ffe54c

P - dark #b78400

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=eeb302&secondary.color=80DEEA

https://material.io/design/color/the-color-system.html#tools-for-picking-colors

## Bootstrap and theming links

[Theme base](https://mdbootstrap.com/freebies/jquery/blog/)

[Eleventy + Netlify CMS](https://github.com/idiazroncero/eleventy-netlify-cms)

## Push

[SMS push for RSS with Prompty](https://www.prompty.io/using-your-rss-feed-to-automate-notifications/)

[PushBullet](https://www.pushbullet.com/channels)

[CORS with Netlify](https://alligator.io/nodejs/solve-cors-once-and-for-all-netlify-dev/)