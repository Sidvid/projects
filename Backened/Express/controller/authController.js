const userDb={
    user:require("../model/user.json"),
    setUser:function (data){
        this.user =data;
    }
}
const handleAuth =(request , response , next)=>{
    // const {user, pass}=request.body;
    console.log(request.body);
    response.status(200).json({message:" we got your request"})
    // next()


}
module.exports={handleAuth}