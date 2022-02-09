import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import mentorRoute from "./routes/mentors.js";
import userRoute from "./routes/users.js";
// import loginRoute from "./routes/login"
import dotenv from "dotenv";

// allow our server to have ENVironmental-variables
dotenv.config();

// Init express
const app = express();
const port = process.env.PORT || 5000;

// Connection to MongoDB
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
// signup and login
// app.use("/login", loginRoute);
// app.use("/signup", signupRoute);

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
