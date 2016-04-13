var server = require("./server");
var router = require("./router");
var services = require("./services");

var handle = {
	'/api/file': services.file
};

server.start(router.route, handle);

console.log('started at 8000');
