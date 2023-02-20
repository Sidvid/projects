import mongoose from "mongoose";
export function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MONGO DB CONNECTED");
    })
    .catch((error) => {
      console.log(error, "DB CONNECTION FAILED");
    });
}
