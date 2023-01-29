import assert from "assert";
import { DateTime } from "luxon";
import fs from "fs";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import markdownIt from "markdown-it";

import markdownItAnchor from "markdown-it-anchor";
import pictureFilter from './src/filters/picture';
import imageFilter from './src/filters/image';
import bgimageFilter from './src/filters/bgimage';


export default function(eleventyConfig) {

  // Read env variable set by cross-env
  const env = process.env.ELEVENTY_ENV;
  assert(env == "prod" || env == "dev", `Please specify env before running this, now it is set to ${env}`);

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    let res = DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    return res;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("picture", pictureFilter );
  eleventyConfig.addFilter("image", imageFilter );  
  eleventyConfig.addFilter("bgimage", bgimageFilter );  

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // eleventyConfig.addCollection("tagList", require("./src/11ty/getTagList"));

  eleventyConfig.addPassthroughCopy("static/img");
  eleventyConfig.addPassthroughCopy("static/css");
  eleventyConfig.addPassthroughCopy("static/js");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);


  // Browsersync Overrides
  
  /*
  eleventyConfig.setBrowserSyncConfig({    
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: { port: 8080 },
    ghostMode: false,
    notify: true,
    logLevel: "debug"
  });*/

  eleventyConfig.setBrowserSyncConfig({    
    ui: false,
    ghostMode: false,
    notify: false,
    logLevel: "debug",
    logConnections: true,
    reloadDelay: 2000
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "templates",
      data: `src/config`,
      output: "_site"
    }
  };
};
