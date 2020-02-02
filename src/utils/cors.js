/**
 * Cross-site request helperes
 * 
 * Inspired by https://glitteringglobofwisdom.com/circumventing-cors-with-netlify-functions-nodejs/
 */

function preflight(origin = "*") {
    return {
        statusCode: 204,
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
        },
        body: {},
    };
}

module.exports = {
    preflight
};