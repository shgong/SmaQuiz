var express = require('express');
var router = express.Router();
var fs = require("fs");



router.get('/data',function(req,res){
    res.sendFile(__dirname+'/data/data.json');
})


router.get('/', function(request, response) {

    fs.readFile("index.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });

});


module.exports = router;
