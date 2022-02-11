import express from "express";
import bcrypt from "bcrypt";
// jwt is used to identify the user as authenticated & authorized
// authentification is the process of logging in
// authorization is the process of deciding if you can acces a page or route or not
import jwt from "jsonwebtoken";
// passport secures routes (middleware)
import passport from "passport";
import UserModel from "../models/userModel.js";

const router = express.Router();

// Route to register a user
router.post("/signup", (req, res) => {
  // Request Body - all data incorporated
  console.log(req.body);

  // Input-fields
  const reqUsername = req.body.username;
  const reqEmail = req.body.email;
  const reqName = req.body.name;
  const reqPassword = req.body.password;

  UserModel.findOne({ email: reqEmail }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      res.send({ Msg: "User already exists" });
    } else {
      console.log("User : >>", user);

      // Encrypt users password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(reqPassword, salt, (err, hash) => {
          if (err) {
            res.send(err);
          } else {
            console.log("hash:", hash);

            // Create new user
            const newUser = new UserModel({
              username: reqUsername,
              name: reqName,
              email: reqEmail,
              password: hash,
            });

            // Save the new User in our DB
            newUser
              .save()
              .then((user) => {
                res.json({ message: "Success!", user: user });
              })
              .catch((err) => {
                res.send(err);
              });
          } // closes else
        }); // closes bcrypt hash
      }); // closes bcrypt salt
    } // closes else if user created
  }); // closes userModel
}); // closes router.post

export default router;
