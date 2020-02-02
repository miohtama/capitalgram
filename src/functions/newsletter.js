/**
 * Netsletter subscription server-side handler.
 * 
 * 
 * This is called on the client side by AJAX in static/js/newsletter.js
 */

//const { Cryptr } = require("cryptr");
//const cryptr = new Cryptr("secret");
const { MailerLiteClient } = require('../utils/mailerlite');

const getHtmlRedirect = url => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; URL='${url}'" />

    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    Subscribed, you will be redirected. If not, please <a href="${url}">click here</a>
  </body>
</html>
`;

const { MAILERLITE_API_KEY } = process.env;

exports.handler = async (event, context) => {

    console.log(event, context);
    const client = new MailerLiteClient(apiKey=MAILERLITE_API_KEY);

    if(event.httpMethod != "POST") {
        return { statusCode: 405, body: "Method Not Allowed for newsletter subscriber" };
    }

    return {
        statusCode: 404,
        body: "Booo"
    };

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
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: getHtmlRedirect(process.env.URL)
    };
};
