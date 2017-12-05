var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')    
       .on('error', function (err) {                                   
         if(err) {
           console.log(err);
         }
       })
       .on('response', function (response) {                           
         console.log('Response Status Message: \n', response.statusMessage, '\n Content type: \n', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));               
