var static = require('node-static');
var staticServer = new static.Server();

function route(handlers, url, request, response) {
    console.log("About to route a request for " + url);

    if (url.includes('/api/')) {
        if (typeof handlers[url] === 'function') {
            handlers[url](request, response);
        } else {
            console.log("No request handlers found for " + url);
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("404 Not found");
            response.end();
        }
    }
    else {
        request.addListener('end', function () {
            staticServer.serve(request, response);
        }).resume();
    }

}

exports.route = route;
