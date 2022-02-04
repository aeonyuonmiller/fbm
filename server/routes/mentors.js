import express from "express";
import mentorsModel from "../models/mentorsModel.js";

// here we are specifying the different endpoints

const router = express.Router();

router.get("/all", (req, res) => {
  mentorsModel.find({}, (err, mentors) => {
    if (err) {
      res.send(err);
    } else {
      res.send(mentors);
    }
  });
});

router.get("/berlin", (req, res) => {
  mentorsModel.find({ location: "Berlin" }, (err, mentors) => {
    if (err) {
      res.send(err);
    } else {
      res.send(mentors);
    }
  });
});

export default router;
