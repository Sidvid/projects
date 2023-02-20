const router =require("express").Router()
const loginHandle=require("../controller/authController")
router.post("/",loginHandle.handleAuth)
module.exports=router