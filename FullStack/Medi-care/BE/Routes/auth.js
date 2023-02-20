import express from "express";
import Admin from "../Modules/Admin.js";
import Doctor from "../Modules/Doctor.js";
import Staff from "../Modules/Staff.js";
import jsonwebtoken from "jsonwebtoken";
let {sign} = jsonwebtoken
// import { getUserRole } from "../Utils/helper/Helpers.js";
// import { verifyToken } from "../Utils/middleware/verifyTokens.js";
let router = express.Router();

//login route
router.post("/login", async (request, response) => {
  const { email, role, password } = request.body;
  try {
    let user;
    if (role === "isDoctor") {
      user = await Doctor.findOne({email});
    } else if (role === "isStaff") {
      user = await Staff.findOne({email});
    } else {
      user = await Admin.findOne({email});
    }
    if (user.email === email && user.password === password) {
      let token = sign(
        {
          userId: user.id,
          role: user.role,
          email: user.email,
        },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      response
        .status(200)
        .json({ message: "User logged in", success: true, token });
    } else {
      response.status(500).json({
        message: "Username or password is wrong",
        success: false,
      });
    }
  } catch (error) {
    console.log("Error" , error);
    response
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
});
//logout route
export default router;
