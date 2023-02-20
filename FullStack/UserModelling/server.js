const express = require ("express")
const connectDB=require("./config/db")
const app = express()
connectDB()
app.use(express.json({extended:false}))
app.use("/api/user" , require("./routes/api/user"))
app.use("/api/auth" , require("./routes/api/auth"))
app.use("/api/profile" , require("./routes/api/profile"))
app.use("/api/posts" , require("./routes/api/posts"))

app.listen(2500)