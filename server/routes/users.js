import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
// userModel from "../models/userModel.js";

const router = express.Router();

// Route for Registering a userSelect:
router.post("/register", (req, res) => {
  //Request Body console console.log();
  console.log(req.body);

  const reqEmail = req.body.email;
  const reqName = req.body.name;
  const reqPassword = req.body.password;

  userModel.findOne({ email: reqEmail }, (err, user));
});
