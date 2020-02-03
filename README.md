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

To run server-side functions locally, write down the api key in gitignored `mailerlite-apikey.txt`.
Then you can export it as following:

```sh
export MAILERLITE_API_KEY=`cat mailerlite-apikey.txt`
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
  http://localhost:3000/api/login
```  

Then you can proceed to actually try to do the newsletter subscription, on the dev server,
from the subscription form in the footer.

[More information](https://www.npmjs.com/package/netlify-lambda)

# Random links

## Netlify

Netlify integration was inspired by Phil Hawksworth's example [How to run Netlify and Eleventy locally in the same server](https://github.com/philhawksworth/eleventyone).

It uses [cross-env](https://www.npmjs.com/package/cross-env) to set environment variable `ELEVENTY_ENV` compatible manner across Windows and Unixes.

`src/data` folder is split to `dev` and `prod` configs. `.eleventy.js` chooses between these configs.

Note that the separation of enviroments is not currently used for anything.

## Bootstrap and theming links

https://mdbootstrap.com/freebies/jquery/blog/

https://freesvg.org/paper-plane-silhouette

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=eeb302&secondary.color=80DEEA

https://material.io/design/color/the-color-system.html#tools-for-picking-colors

https://github.com/idiazroncero/eleventy-netlify-cms

https://github.com/muhajirdev/sendgrid-subscription-netlify-function

https://www.prompty.io/using-your-rss-feed-to-automate-notifications/

https://www.pushbullet.com/channels

https://alligator.io/nodejs/solve-cors-once-and-for-all-netlify-dev/