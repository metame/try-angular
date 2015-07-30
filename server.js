var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8000,
    project = '/app';
    
app.use(express.static(path.join(__dirname, project)));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

app.listen(port, function(){
    console.log('Server started at %s', port);
});
    