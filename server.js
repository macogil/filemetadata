var express = require ('express');
var morgan = require ('morgan');
var path = require ('path');
var PORT = process.env.PORT || 3000;
var multer = require ('multer');

var app= express();
var upload = multer();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/upload', upload.single('file'), function(req,res){
  res.json({size: req.file.size});
});

app.listen(PORT, function(){
  console.log('Listening on port '+PORT);
});
