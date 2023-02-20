import mongoose from "mongoose";
const EmployeesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "isUser",
  },
  password: { type: String, required: true },
  designation: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Employees", EmployeesSchema);
