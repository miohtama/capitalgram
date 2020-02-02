/**
 * Netsletter subscription server-side handler.
 * 
 * 
 * This is called on the client side by AJAX in static/js/newsletter.js
 */

//const { Cryptr } = require("cryptr");
//const cryptr = new Cryptr("secret");
const { MailerLiteClient } = require('../utils/mailerlite');
const { preflight } = require('../utils/cors');

const { MAILERLITE_API_KEY } = process.env;

exports.handler = async (event, context) => {

    console.log(event);
    console.log(context);
    const client = new MailerLiteClient(apiKey=MAILERLITE_API_KEY);

    // CORS preflight request
    if(event.httpMethod == "OPTIONS") {
        return preflight();
    }

    if(event.httpMethod != "POST") {
        return { statusCode: 405, body: "Method Not Allowed for newsletter subscriber" };
    }

    console.log("Processing POST");

    // const input = cryptr.encrypt(JSON.stringify(data));
    const input = event.queryStringParameters.id;
    if (!input) {
        return {
            statusCode: 404,
            body: "param id not found"
        };
    }
    const data = JSON.parse(cryptr.decrypt(input));

    const request = {};
    request.body = [data];
    request.method = "POST";
    request.url = "/v3/contactdb/recipients";
    const [_, body] = await client.request(request);

    return {
        statusCode: 200,
        headers: {  
            "Content-Type": "text/html",
            //
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: getHtmlRedirect(process.env.URL)
    };
};
