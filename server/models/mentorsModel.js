import mongoose from "mongoose";
const { Schema } = mongoose;

const mentorSchema = new Schema({
  mentor: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Mentor", mentorSchema);
