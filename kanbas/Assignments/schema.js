import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    availableFrom : Date,
    Due : Date,
    availableUntil:Date, 
    points : Number,
    description : String
  },
  { collection: "assignments" }
);
export default schema;