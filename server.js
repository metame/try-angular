var express = require('express'),
    app = express(),
    http = require('http'),
    path = require('path'),
    server = http.createServer(app),
    port = process.env.PORT || 8000;
    
app.use(express.static(path.join(__dirname,'/app')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

server.listen(port, function(){
    console.log('Server started at %s', port);
});
    