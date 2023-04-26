
const mongoClient=require("../database/connection")

const insertData=async (req,res)=>{
    const data= req.body
    const result= await mongoClient.insertfun(data)
    res.send({message:result})

}
const getData= async(req,res)=>{
    const query1 = req.query;
    const result = await mongoClient.getfun(query1)
    res.send({message:result})
}
const deleteData = async (req,res)=>{
    const data = req.query;
    const result = await mongoClient.deletefun(data);
    res.send({message:result})

}
const updateData = async (req,res)=>{
    const data1 = req.body;
    const filter = data1.filter;
    const value = {$set:data1.value}
    try{
        const result = await mongoClient.updatefun(filter,value);
        console.log(result)
        res.send({message:result})
    }
    catch(error){
        res.send({message:`error ${error}`})
    }
    
}

module.exports={
    insertData,getData,deleteData,updateData
}