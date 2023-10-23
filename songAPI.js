var express = require('express');
var app = express();
var fs = require("fs");


//Get
app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


//Add
song = {
    "song6" : {
       "song" : "Bella Ciao",
       "artist" : "Manu Pilas",
       "genre" : "Italian Folk Song",
       "link": "https://www.youtube.com/watch?v=4JVaRloezno",
       "id": 6
    }
 }

 app.post('/addSong', function (req, res) {
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })



//Delete
 app.delete('/deleteSong', function (req, res) {
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["song1"];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 //ID
 app.get('/:id', function (req, res) {
   // First read existing songs.
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      var songs = JSON.parse( data );
      var song = songs["song" + req.params.id];
      console.log( song );
      res.end( JSON.stringify(song));
   });
})


var server = app.listen(8081, function () {
   console.log('Server running at http://127.0.0.1:8081/')
})
