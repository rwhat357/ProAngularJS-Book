var connect = require('connect');
var serveStatic = require('serve-static'); 
var app = connect(); 

app.use(serveStatic('./angularjs')); 

app.listen(5000 , function(){
    console.log('listen on 5k port');
})