var https = require('https');
var url = require("url");
var fs = require('fs');

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}
	https.createServer(options, onRequest).listen(8000);
}

exports.start = start;
