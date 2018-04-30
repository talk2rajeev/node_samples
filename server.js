var express = require("express");
var fs = require('fs');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cadc");
  dbo.collection("categories").distinct('locale', function(err, result) {
    if (err) throw err;
    //console.log(Array.isArray(result), result );
    fs.writeFile('locale.json', JSON.stringify(result), 'utf8',function(err){
        if(err) throw err;
    });
    db.close();
  });

});


app.listen(4001, function() {
  console.log("Express running....");
});
