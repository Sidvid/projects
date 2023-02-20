import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
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


  password: {
    type: String,
    required: true,
  },

  profile: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "isAdmin",
  },
});

export default mongoose.model("adminSchema", AdminSchema);
