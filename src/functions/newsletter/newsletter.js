/**
 * Netsletter subscription server-side handler.
 * 
 * 
 * This is called on the client side by AJAX in static/js/newsletter.js
 */

const { MailerLiteClient } = require('./mailerlite');

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
        return { 
            statusCode: 405, 
            body: "Method Not Allowed for newsletter subscriber",
            headers: {
                "content-type": "application/text"
            },            
        };
    }

    console.log("Processing POST");

    // const input = cryptr.encrypt(JSON.stringify(data));
    const {email} = JSON.parse(event.body);
    
    if (!email) {
        return {
            headers: {
                "content-type": "application/text"
            },                        
            statusCode: 500,
            body: "param email not found"
        }
    }

    // Call MailerLite API
    try {
        await client.subscribe(email);
    } catch(e) {
        return {
            headers: {
                "content-type": "application/text"
            },            
            statusCode: 500,
            body: e.message
        }        
    }
    
    return {
        // You need to explicitly add content-type here,
        // or Firefox tries to parse the response as XML
        headers: {
            "content-type": "application/text"
        },        
        statusCode: 200,                
        body: "ok"
    };
};
