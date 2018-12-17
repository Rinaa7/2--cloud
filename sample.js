var AWS = require('aws-sdk'); 
 
var S3 = require('aws-sdk/clients/s3'); 

AWS.config.update({ 
region: 'ru-msk', 
endpoint: 'http://hb.bizmrg.com', 
}); 

var s3 = new AWS.S3();

s3.getObject({Bucket: 'tbaket', Key: 'example.js'}, function(err, data){ 
if (err) console.log(err, err.stack); // an error occurred 
else console.log(data); // successful response 
}); 

s3.putObject({ 
Bucket: 'tbaket', 
Key: "155.txt", 
}, function(err, data){ 
if (err) console.log(err, err.stack); // an error occurred 
else console.log(data); // successful response 
} );