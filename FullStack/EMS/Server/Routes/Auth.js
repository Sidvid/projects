import express from "express";
import Employee from "../Modules/Employee.js";
import jsonwebtoken from "jsonwebtoken";
import { verifyToken } from "./../Utils/helpers.js";
let authRouter = express.Router();
let { sign } = jsonwebtoken;
//LOGIN ROUTE
authRouter.post("/login", async (request, response) => {
  let { email, password } = request.body;

  try {
    let savedUser = await Employee.findOne({ email });
    if (
      !savedUser ||
      savedUser.password != password ||
      savedUser.email != email
    ) {
      response.status(400).json({
        message: "Usename or password are wrong",
        success: false,
      });
      return;
    }
    let token = await sign(
      { email, role: savedUser.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    response
      .status(200)
      .json({ message: "User found", success: true, data: savedUser, token });
  } catch (error) {
    console.log("error", error);
    response
      .status(500)
      .json({ message: "Something went wrong!!", success: false });
  }
});
// isUserLoggedIn
authRouter.post("/isUserLoggedIn", verifyToken, async (request, response) => {
  let tokenUser = request.token;

  let requestedUser = request.body;
  try {
    if (tokenUser.email === requestedUser.email) {
      let userData = await Employee.findOne({ email: tokenUser.email });
      response
        .status(200)
        .json({ message: "Valid user", success: true, userData });
    } else {
      response
        .status(400)
        .json({ message: "You are not allowed", success: false });
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: "Something went wrong!", success: false });
  }
});

//LOGOUT ROUTE
export default authRouter;
