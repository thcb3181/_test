const mongo = require('mongodb');

const mongo_conn = mongo.MongoClient;

const url = "mongodb://192.168.30.43:27017"

mongo_conn(url,{userNewUrlParser: true},(err,client)=>{
     if(err) throw err;
     console.log(client.topology.clientInfo);

     client.close()

});
