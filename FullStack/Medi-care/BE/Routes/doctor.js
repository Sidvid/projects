import express from "express";
import Doctor from "../Modules/Doctor.js";
import { verifyToken } from "../Utils/middleware/verifyTokens.js";
let doctorRouter = express.Router();
//CREATE A DOCTOR(ADMIN)
doctorRouter.post("/doctor", verifyToken, async (request, response) => {
  const doctorData = request.body;
  console.log("Request body->", request.auths);
  if (request.auths.role === "isAdmin") {
    try {
      let saveDoctor = new Doctor(doctorData);
      let createdUser = await saveDoctor.save();
      response.status(201).json({
        message: "New doctor has been added.",
        success: true,
        data: createdUser,
      });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Some error occurred", success: false, error });
    }
  } else {
    response.status(401).json({
      message: "You do not have access to perform this task.",
      success: false,
    });
  }
});
//UPDATE A DOCTOR(ADMIN)
doctorRouter.put("/doctor/:id", verifyToken, async (request, response) => {
  console.log({ authId: request.auths.userId, paramsId: request.params.id });
  if (
    request.auths.role === "isAdmin" ||
    (request.auths.role === "isDoctor" &&
      request.params.id === request.auths.userId)
  ) {
    try {
      let updateDoctor = await Doctor.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
      );
      response.status(201).json({
        message: "Doctor is updated successfull.",
        success: true,
        updateDoctor,
      });
    } catch (error) {
      response.status(500).json({
        message: "Something went wrong.",
        success: false,
      });
    }
  } else {
    response.status(400).json({
      message: "You cannot perform this task",
      success: false,
    });
  }
});
//DELETE A DOCTOR(ADMIN)
doctorRouter.delete("/doctor/:id", verifyToken, async (request, response) => {
  if (request.auths.role === "isAdmin") {
    try {
      await Doctor.findByIdAndDelete(request.params.id);
      response.status(200).json({
        message: "Doctor has been deleted successfull.",
        success: false,
      });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Something went wrong", success: false });
    }
  } else {
    response
      .status(401)
      .json({ message: "You can not perform this task.", success: false });
  }
});
//GET ALL DOCTORS
doctorRouter.get("/doctor", verifyToken, async (request, response) => {
  try {
    const allDoctors = await Doctor.find();
    response.status(200).json({
      message: "All doctors are fetched",
      success: true,
      data: allDoctors,
    });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Something went wrong.", success: false });
  }
});
export default doctorRouter;
