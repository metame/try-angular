var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8000;
    
app.use(express.static(path.join(__dirname,'/app')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

app.listen(port, function(){
    console.log('Server started at %s', port);
});
    