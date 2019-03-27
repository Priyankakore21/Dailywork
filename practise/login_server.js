let http = require('http');
let db = require('mysql');
let fs = require('fs');

fs.readFile('./login.html', function (err, data) {
    if (err) {
        response.writeHead(404);
        response.write('file not found');
    }
    else {
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(data);  
            response.end();  
        }).listen(8080);
    }
    });