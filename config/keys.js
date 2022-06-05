//var MongoClient = require('mongodb').MongoClient;

//var uri = "mongodb://kage:<password>@cluster0-shard-00-00.rrrbr.mongodb.net:27017,cluster0-shard-00-01.rrrbr.mongodb.net:27017,cluster0-shard-00-02.rrrbr.mongodb.net:27017/?ssl=true&replicaSet=atlas-1183jm-shard-0&authSource=admin&retryWrites=true&w=majority";
/*
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/


module.exports = {
  mongoURI: "mongodb+srv://Hash:123@cluster0.8fo9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  secretOrKey: "ba8c4b202d310d3d352fbde6176071e221e234ab910430c2a0e0cf0b0e63a98970c94c9"
};