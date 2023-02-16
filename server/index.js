const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
 

const app = express()
app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://deepak:1234@cluster0.otxa2hp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
const db = client.db("s10");
const col = db.collection("user");


app.post('/insert', (request, response)=>{
    response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
    console.log(request.body)
    col.insertOne(request.body)
    console.log("Documents Inserted");
})

app.listen(8081)
console.log("server started")

// mongodb+srv://deepak:<password>@crudone.lxupqnd.mongodb.net/?retryWrites=true&w=majority

