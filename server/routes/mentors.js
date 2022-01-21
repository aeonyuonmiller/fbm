import express from "express";
import mentorsModel from "../models/mentorsModel.js";

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
