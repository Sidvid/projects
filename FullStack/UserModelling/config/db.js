const mongoose=require("mongoose")
const config = require("config")
const db = config.get("mongoURI");
const connectDB=async ()=>{
    try {
        await mongoose.connect(db , {useNewUrlParser : true})
        console.log("Mongo connected");
        
    } catch (error) {
        console.log("Error in connecting the mongo db" , error);
        process.exit(1)
    }
}
module.exports=connectDB;