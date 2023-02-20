import  express  from "express";
import dotenv from "dotenv"
import  {connectDB}  from "./Config/connectDB.js";
import router from "./Routes/auth.js"
import doctorRouter from "./Routes/doctor.js";
let app = express()
app.use(express.json())
dotenv.config()
connectDB()

app.use("/api" , router )
app.use("/api", doctorRouter)
app.listen(6767 , ()=>{
    console.log("BE IS CONNECTED.....");
})