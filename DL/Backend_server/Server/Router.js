const express = require("express");
const addUser = require("../Controller/Use-controller.js");
const router = express.Router();


router.get("/home",(req,res)=>{
    res.send("Hello kaise ho dost")
})
router.post("/scrub", addUser)

module.exports=router;