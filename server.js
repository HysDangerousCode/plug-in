const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {
    var file_name = './' + req.url;
    fs.readFile(file_name, function(err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(3212);
console.log('localhost:3212');