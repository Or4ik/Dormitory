var server   = require('./server');
var services = require('./services');
var router   = require('./router');

var handlers = {
    "/api/getTabs" : services.getTabs
};
server.start(handlers, router.route);