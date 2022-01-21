import express from "express";
import cors from "cors";
import mentorRoute from "./routes/mentors.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Initialize Backend Server App
const app = express();
// Port
const port = process.env.PORT || 5000;

// Connection DB MongoDB
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

// Middleware

// Bodyparser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors
app.use(cors());

// Router
app.use("/api/mentors", mentorRoute);

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
