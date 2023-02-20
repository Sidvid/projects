import mongoose from "mongoose";

const StaffSchema = mongoose.Schema({
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
    type: String,
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
    default: "isStaff",
  },
});

export default mongoose.model("staffSchema", StaffSchema);
