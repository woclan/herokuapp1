console.log('hola');

const MongoClient = require('mongodb').MongoClient
var db;


MongoClient.connect('mongodb://luis:luis01@ds141671.mlab.com:41671/luis', (err, database) => {
	if(err)
        throw err;
    console.log("connected to the mongoDB !");
    db=database.db('luis');
// ... start the server
})


const express = require('express');
const bodyParser= require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended: true}))

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);


app.listen(port_number, function() {
console.log('listening on 3000')
})


app.post('/', function(req, res) {
res.sendFile('/Users/luism/expressproj/index.html')


})


app.get('/quotes', (req, res) => {
console.log('Hellooooooooooooooooo!');
db.collection("names").find({}).toArray(function(err, data) {
         res.send(data);
     });


console.log(req.body)

})

