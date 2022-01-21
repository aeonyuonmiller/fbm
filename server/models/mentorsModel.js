import mongoose from "mongoose";

const { Schema } = mongoose;

const mentorSchema = new Schema({
  mentor: {
    type: String,
    required: true,
  },
  age: String,
  body: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
