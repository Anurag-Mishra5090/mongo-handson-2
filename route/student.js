const express = require("express")
const stdctr = require("../controller/student")
const router = express.Router();

router.post("/student",stdctr.insertData)
router.get("/student",stdctr.getData)
router.delete("/student",stdctr.deleteData)
router.put("/student",stdctr.updateData)


module.exports=router
