const userDb={
    users:require("../model/user.json"),
    setUsers:function (data) {this.users=data}
}
const fsPromise =require("fs").promises;
const path = require("path")
const bcrypt=require("bcrypt")
const handleNewUser=async (req,res)=>{
    console.log(req);
    const {user , pass}=req.body;
    if(!user || !pass)return res.status(400).json({message:"Password and username is required."})
    const duplicate=userDb.users.find(person=>person.username === user);
    if(duplicate)return res.sendStatus(409)
    try {
        const hashedPass= await bcrypt.hash(pass ,10)
        const newUser= {
            username:user,
            pass:hashedPass
        }
        userDb.setUsers([...userDb.users , newUser]);
        await fsPromise.writeFile(
            path.join(__dirname , "..","model","users.json"),
            JSON.stringify(userDb.users)
        )
        console.log(userDb.users);
        res.status(201).json({success:"New user is created"})
        
    } catch (error) {
        res.send(500).json({"message":"Error occurred"})
        
    }

}
module.exports={handleNewUser}