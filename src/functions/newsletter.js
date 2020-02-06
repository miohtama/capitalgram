/**
 * Netsletter subscription server-side handler.
 * 
 * 
 * This is called on the client side by AJAX in static/js/newsletter.js
 */

const { MailerLiteClient } = require('../utils/mailerlite');
const { preflight } = require('../utils/cors');

const { MAILERLITE_API_KEY } = process.env;

exports.handler = async (event, context, cb) => {

    console.log(event);
    console.log(context);
    console.log(cb);
    const client = new MailerLiteClient(apiKey=MAILERLITE_API_KEY);

    // Preflight is not needed, as dev proxy works correctly and all the requests 
    // hit the same origin
    // if(event.httpMethod == "OPTIONS") {
    //    return preflight();
    // }

    if(event.httpMethod != "POST") {
        return { statusCode: 405, body: "Method Not Allowed for newsletter subscriber" };
    }

    console.log("Processing POST");

    // const input = cryptr.encrypt(JSON.stringify(data));
    const {email} = JSON.parse(event.body);
    
    if (!email) {
        return {
            statusCode: 500,
            body: "param email not found"
        }
    }

    try {
        await client.subscribe(email);
    } catch(e) {
        return {
            statusCode: 500,
            body: e.message
        }        
    }
    
    return {
        statusCode: 200,
        body: "ok"
    };
};
