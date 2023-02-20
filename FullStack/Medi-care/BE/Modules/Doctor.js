import mongoose from "mongoose";

const DoctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: false,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  degree: {
    type: [String],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  profile: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "isDoctor",
  },
});
 
export default mongoose.model("doctorSchema" , DoctorSchema)