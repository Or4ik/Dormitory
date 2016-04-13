var fs = require('fs');

function index(response, request) {
	fs.readFile('../ui/index.html', function(err, html) {
		response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
	});
}

function file(response, request) {
	fs.readFile('data/file.json', function(err, text) {
		console.log('file.json:   ', text);
		response.writeHeader(200, {"Content-Type": "application/json"});  
		response.write(text);  
		response.end();
	});
}

exports.index = index;
exports.file = file;
