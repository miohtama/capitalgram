# Capitalgram blog

This is a corporate website and blog based on [Evelenty example](https://github.com/11ty/eleventy-base-blog).

# Features 

* Netlify hosting

* MailerLite newsletter

* Custom theme based on Material Boostrap

# How to develop

As the site is very company-specific content, you mostly benefit about this repository
as an example for your own Eleventy based site.

Here are the instructions for running the project locally.

## Getting Started

### 1. Clone this Repository

### 2. Navigate to the directory

### 3. Install dependencies

```
npm install
```

### 4. Run Eleventy

```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

## Testing MailerLite client

A small JavaScript lib is included to interact with MailerLite from Netlify server-side functions.

To test, write your MailerLite API key in a file called `mailerlite-apikey.txt` that is Gitignored.

Then run.

```sh
npm run test-mailerlite
```

## Testing Netlify server-side functions

To run server-side functions locally, do the following.

```sh
export MAILERLITE_API_KEY=...
./node_modules/.bin/netlify-lambda serve src/utils 
```    

[More information](https://www.npmjs.com/package/netlify-lambda)

# Random links

## Netlify

[How to run Netlify and Eleventy locally in the same server](https://github.com/philhawksworth/eleventyone)

## Bootstrap

https://mdbootstrap.com/freebies/jquery/blog/

https://freesvg.org/paper-plane-silhouette

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=eeb302&secondary.color=80DEEA

https://material.io/design/color/the-color-system.html#tools-for-picking-colors

https://github.com/idiazroncero/eleventy-netlify-cms

https://github.com/muhajirdev/sendgrid-subscription-netlify-function


https://www.prompty.io/using-your-rss-feed-to-automate-notifications/

https://www.pushbullet.com/channels

