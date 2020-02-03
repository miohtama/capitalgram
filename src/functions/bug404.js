/**
 * Reported bug to Netlify https://github.com/netlify/cli/issues/695
 */

exports.handler = async (event, context, cb) => {
    
    return {
        statusCode: 403,
        body: "this does not hang"
    }

    return {
        statusCode: 404,
        body: "this hangs"
    }

};
