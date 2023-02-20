import express from "express";
import jsonwebtoken from "jsonwebtoken";
let { sign } = jsonwebtoken;
import { verifyToken } from "../Utils/helpers.js";
import Employee from "../Modules/Employee.js";
let employeeRouter = express.Router();

//CREATE A EMPLOYEE
employeeRouter.post("/create", verifyToken, async (request, response) => {
  let data = request.body;
  console.log("My role", request.token.role);

  if (request.token.role === "isAdmin") {
    try {
      let newEmployee = new Employee(data);
      let savedEployee = await newEmployee.save();
      response.status(201).json({
        message: "New Employee has been created",
        success: true,
        data: savedEployee,
      });
    } catch (error) {
      console.log("error", error);
      response.status(500).json({ message: "OOPS!!!", success: false });
    }
  } else {
    response.status(400).json({
      message: "You are not allowed to perform this task",
      success: false,
    });
  }
});

//UPDATE A EMPLOYEE
employeeRouter.put("/:id", verifyToken, async (request, response) => {
  let id = request.params.id;
  let userData = request.body;
  console.log("REQUEST", request.params.id);
  if (request.token.role === "isAdmin") {
    let requestedUser = await Employee.findByIdAndUpdate(id, userData);
    if (!requestedUser) {
      response.status(400).json({
        message: "Employee does not exist in database.",
        success: false,
      });
      return;
    }
    response
      .status(200)
      .json({ message: "user has been updated successfully.", success: true });

    try {
    } catch (error) {
      response
        .status(500)
        .json({ message: "Something wrong occurred!", success: false });
    }
  } else {
    response.status(400).json({
      message: "You have have permission to perform this task.",
      success: false,
    });
  }
});
//DELETE A EMPLOYEE
employeeRouter.delete("/:id", verifyToken, async (request, response) => {
  let id = request.params.id;

  if (request.token.role === "isAdmin") {
    let requestedUser = await Employee.findByIdAndDelete(id);
    if (!requestedUser) {
      response.status(400).json({
        message: "Employee does not exist in database.",
        success: false,
      });
      return;
    }
    response
      .status(200)
      .json({ message: "user has been Deleted successfully.", success: true });

    try {
    } catch (error) {
      response
        .status(500)
        .json({ message: "Something wrong occurred!", success: false });
    }
  } else {
    response.status(400).json({
      message: "You have have permission to perform this task.",
      success: false,
    });
  }
});
//GET ALL EMPLOYEE
employeeRouter.get("/", async (request, response) => {
  try {
    let users = await Employee.find();
    if (!users) {
      response.status(400).json({ message: "No users found", success: false });
    }
    response
      .status(200)
      .json({ message: "Users found", success: true, data: users });
  } catch (error) {
    console.log("get error====>>", error);
    response
      .status(500)
      .json({ message: "Something wrong occurred!", success: false });
  }
});
export default employeeRouter;
