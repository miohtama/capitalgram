/**
 * Data file for social media sharing titles and logos configuration.
 * 
 * Supported
 * - Facebook
 * - Twitter
 * 
 * See and edit social_media_head.njk to allow individual posts and pages to override these values,
 * e.g. for the page specific title image.
 * 
 * To use various Share debugggers to display local dev server pages.
 * Use https://pagekite.net/to create a tunnel from localhost.
 * For npx netlify run in localhost:8888 this would be
 * 
 * python2 pagekite.py 8888 mybloguniqueid.pagekite.me 
 * 
 * This config file is in Eleventy JS data file format: https://www.11ty.dev/docs/data-js/
 */

module.exports = function() {
    
    const general = {

        name: "Capitalgram",

        // This is the path 
        // We give 512 x 512 square logo as the default logo if the pages do not supply their own
        default_logo: "/static/img/capitalgram-logo-square.png",

        default_logo_width: 512,

        default_logo_height: 512,
    };

    // Facebook Sharing debugger is available to preview your sharings
    // https://developers.facebook.com/tools/debug
    // https://developers.facebook.com/docs/sharing/webmasters/
    // https://ogp.me/
    const facebook = {

        name: general.name,
                
        // If your Facebook has a page, you get its id here
        // 
        app_id: undefined,

        // Copy default logo information if the page does not override
        // Facebook prefers 1200x630 image for sharing
        logo: "/static/img/capitalgram-logo-facebook.png", // or general.default_logo,
        logo_width: 1200, // or general.default_logo_width,
        logo_height: 630, // or general.default_logo_height,
        
        // One of https://ogp.me/?fbclid=IwAR0BAwLqqduH9pGKDGgLj7dpmokfXgVXcnEw0M6A4rTillc0q4L0qYpCJBk#types
        // We default to article
        type: "article",
    };

    // https://cards-dev.twitter.com/validator
    // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
    const twitter = {

        // Twitter username of the site. E.g. "nytimes"
        // You can still have individual creators per article
        siteHandle: undefined,
    };

    // For Google search engine and news
    const google = {
        organisation_name: general.name,
        site_logo: general.default_logo,
        site_logo_width: general.default_logo_width,
        site_logo_height: general.default_logo_height
    };

    return {general, facebook, twitter, google }
  };
