const router=require("express").Router()
const registerController = require("../controller/registerController")
router.post("/register" , registerController.handleNewUser)
module.exports=router;

