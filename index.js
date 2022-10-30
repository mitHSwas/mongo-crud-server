const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbUser2:zVwtv8khdrKynrtI@cluster0.gkdpmwb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const database = client.db("nodeMongoCurd");
        const collection = database.collection("users");
        const user = {
            name: "thun Biswas",
            email: "thunbiswas@gmail.com"
        }
        const result = await collection.insertOne(user)
    }
    finally {

    }
}
run().catch(error => console.log(error));


app.get("/", (req, res) => {
    res.send("Node Mongo Curd is generating.")
})

app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
})