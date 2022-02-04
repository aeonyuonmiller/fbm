import express from "express";
import cors from "cors";
import mentorRoute from "./routes/mentors.js";
import userRoute from "./routes/users.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

// allow our server to have ENVironmental-variables
dotenv.config();

// Initialize Backend Server App
const app = express();
// Port
const port = process.env.PORT || 5000;

// Connection DB MongoDB
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Middleware
// Bodyparser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// CORS
app.use(cors());

// Definition of endpoints in Router
app.use("/api/mentors", mentorRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
