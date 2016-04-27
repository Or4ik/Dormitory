function startServer (handlers, router) {
    var http   = require('http');

    http.createServer(function (request, response) {
        var url = request.url;
        router(handlers, url, request, response);
    }).listen(8888);
    console.log('server started at 8888');
};

exports.start = startServer;