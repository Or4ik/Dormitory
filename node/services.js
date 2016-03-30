var fs = require('fs');
var static = require('node-static');
var staticServer = new static.Server();

function index(response, request) {
	fs.readFile('../ui/index.html', function(err, html) {
		response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
	});
}

exports.index = index;
