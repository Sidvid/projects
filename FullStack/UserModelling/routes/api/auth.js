const router = require("express").Router();
const auth=require("../../middleware/auth")
const User =require("../../models/user")
router.get("/",auth, async(request, response) => {
    try {
        const user = await User.findById(request.user.id).select("-password");
        response.json(user)
    } catch (error) {
        console.log("error");
        response.status(500).send("Server Error")
        
    }
});
module.exports = router;
