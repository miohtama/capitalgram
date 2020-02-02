// Simplified MailerLite API client

const axios = require('axios');  // https://www.npmjs.com/package/axios
const { promises: fs } = require('fs');
const assert = require('assert');

/**
 * Quick wrapper around mailerlite
 * 
 * https://developers.mailerlite.com/docs/request
 * 
 */
 class MailerLiteClient {

    constructor(apiKey, endpoint=null) {
        this.apiKey = apiKey;

        assert(apiKey, "API key not defined");

        // Default API endpoint
        if(!endpoint) {
            endpoint = "https://api.mailerlite.com/api/v2";
        }

        this.endpoint = endpoint;
    }

    /**
     * Makke a MailerLite API request
     * 
     * @param {string} path Like "/subscribers"
     * @param {string} method Like "get"
     * @param {object} params Dict of passed params
     */
    async makeRequest(path, method="get", params={}) {
        const fullPath = this.endpoint + path;

        const headers = {
            "X-MailerLite-ApiKey": this.apiKey
        };

        // https://developers.mailerlite.com/docs/response
        try {
            const content = {
                method: method,
                url: fullPath,                
                headers: headers, 
                data: params,
            };
            console.log("Making MailerLite request", content);
            const resp = await axios.request(content);
            assert(resp.status == 200)
            return resp.data;    
        } catch(e) {
            // https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
            let message = e.message;
            if(e.response) {
                message += " status:" + e.response.status + " " + e.response.statusText;
            }
            throw new MailerLiteError(message, e);
        }        
    }


    // https://developers.mailerlite.com/v2/reference#create-a-subscriber
    subscribe(email, name=null) {

        let payload = { email: email };

        // Set full name
        if(name) {
            payload.name = name;
        }

        this.makeRequest("/subscribers", "post", payload);    
    }

    // https://developers.mailerlite.com/v2/reference#subscribers
    getSubscribers() {
        return this.makeRequest("/subscribers", "get");    
    }
 }

 class MailerLiteError extends Error {    
    constructor(message, exception) {
        super(message);
        this.exception = exception;
    }
}

 /** 
  * Some random tests gainst MailerLite production API to see how it behves.
  * 
  * To run: 
  * 
  *     export  MAILER_LITE_API_KEY=...
  *     node -e "await require('./src/utils/mailerlite.js').test()"
  * 
  * See also package.json runner.
  */
 async function test() {
    const apiKey = await (await fs.readFile('mailerlite-apikey.txt', "utf-8")).trim();

    if(!apiKey) {
        throw new Error("API key missing");
    }

    const client = new MailerLiteClient(apiKey);

    await client.subscribe("dummy2@example.com", "Dumpery Dummy"); // https://en.wikipedia.org/wiki/Example.com
    console.log("Subscription ok");

    const subscribers = await client.getSubscribers()
    console.log("Current subscribers:");

    for(const s of subscribers) {
        console.log(s);
    }

 };

 module.exports = {
    MailerLiteClient,
    MailerLiteError,
    test
 };