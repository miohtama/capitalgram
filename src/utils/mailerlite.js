// Simplified MailerLite API client

const axios = require('axios');  // https://www.npmjs.com/package/axios


/**
 * Quick wrapper around mailerlite
 * 
 * https://developers.mailerlite.com/docs/request
 * 
 */
 class MailerLiteClient {

    constructor(apiKey, endpoint=null) {
        this.apiKey = apikey;

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
    makeRequest(path, method="get", params={}) {
        const fullPath = this.endpoint + path;

        const headers = {
            "X-MailerLite-ApiKey": this.apiKey
        };

        // https://developers.mailerlite.com/docs/response
        try {
            const resp = await axios.request({
                url: fullPath,
                method,
                headers, 
                data: params,
            });

            return resp;    
        } catch(e) {
            // https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
            const data = resp.data;
            const message = data.message;
            throw new MailerLiteError(message, e);
        }        
    }

    subscribe(email, name=null) {

        let payload = { email: email };

        // Set full name
        if(name) {
            payload.name = name;
        }

        this.makeRequest("post", "/subscribers", payload);    
    }
 }

 class MailerLiteError extends Error {    
    constructor(message, exception) {
        this.message = message;
        this.exception = exception;
    }
}

 /** 
  * Some random tests gainst MailerLite production API to see how it behves.
  * 
  * To run: 
  * 
  *     MAILER_LITE_API_KEY = "..." node -e "require('src/utils/mailerlite.js').test()"
  * 
  * 
  */
 function test() {
    const apiKey =  process.env.MAILER_LITE_API_KEY;
    const client = MailerLiteClient(apiKey);

    let resp = client.subscribe("dummy@example.com"); // https://en.wikipedia.org/wiki/Example.com
    console.log(resp);
 }

 module exports = {
    MailerLiteClient,
    MailerLiteError,
    test
 };