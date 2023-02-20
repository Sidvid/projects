const express = require("express");
const app = express();
const auth=require("./routes/auth")


const PORT = process.env.PORT || 4600;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require("./routes/register"))
app.use("/login" , auth)

app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
