const express = require("express")
 const app = express()
const bodyParser = require("body-parser")
 const studentRouter = require("./route/student")
 app.use(bodyParser.json())
 app.use(studentRouter);
 


app.listen(6000,(req,res)=>{
    console.log("server is running on port");
})