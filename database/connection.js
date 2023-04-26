const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017"

const client =new MongoClient(url)

const insertfun=async(data)=>{
    await client.connect()
    const database= client.db("student2");
    const collection = database.collection("information")
    const dbresponse = await collection.insertOne(data)
    await client.close()
    return dbresponse
    
}
const getfun = async (data)=>{
    await client.connect();
    const database = client.db("student2");
    const collection = database.collection("information")
    const dbresponse = await collection.find(data).toArray();
    await client.close()
    return dbresponse
}

const deletefun = async (data)=>{
    await client.connect();
    const database = client.db("student2");
    const collection = database.collection("information")
    const dbresponse = await collection.deleteOne(data)
    await client.close();
    return dbresponse
}

const updatefun = async (filter,value)=>{
    await client.connect();
    const database = client.db("student2");
    const collection = database.collection("information");
    const dbresponse = await collection.updateOne(filter,value);
    await client.close()
    return dbresponse
}

module.exports={
    insertfun,getfun,deletefun,updatefun
}