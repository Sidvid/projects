import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/connectDB.js";
import authRouter from "./Routes/Auth.js";
import employeeRouter from "./Routes/Employees.js";
import  cors  from "cors";
let app = express();
dotenv.config();
app.use(express.json());
let PORT = process.env.PORT;
connectDB();

app.use(cors())

app.use("/", authRouter);
app.use("/api/", employeeRouter);

app.listen(PORT, () => {
  console.log("API are running........");
});
