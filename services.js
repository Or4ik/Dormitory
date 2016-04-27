var fs = require('fs');

function getTabs(request, response) {
   fs.readFile('data/tabs.json', function (err, data) {
       response.writeHead(200, {"Content-Type": "application/json"});
       response.write(data);
       response.end();
   });
}
exports.getTabs = getTabs;

