const express = require("express");
const jwt = require("jsonwebtoken");
const becrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/User");
const jwtVerify = require("../jwtverify");

const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  return nameRegex.test(name);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post(`/addFormData`, jwtVerify, async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!validateName(name) || !validateEmail(email)) {
      return res.status(400).json({ error: "Invalid name or email format." });
    } else {
      await User.findByIdAndUpdate(
        { _id: req.userId },
        {
          $push: {
            data: req.body,
          },
        }
      );
      res.status(200).json({message:"Form details are added successfully", status: true });
    }
  } catch (err) {
    res.status(500).json({message: "Couldn't add data to database", status: false });
  }
});

router.get(`/getData`, jwtVerify, async (req, res) => {
  try {
    const user = await User.findById({ _id: req.userId });
    res.json({ status: true, data: user.data });
  } catch (err) {
    res.json({ status: false });
  }
});

router.post("/register", async (req, res) => {
  try {
    const isUserPresent = await User.findOne({ email: req.body.email });

    if (isUserPresent) {
      return res
        .status(200)
        .send({ message: "user already present!", status: false });
    }

    const salt = await becrypt.genSalt(12);
    const password = await req.body.password;
    const hashedpassword = await becrypt.hash(password, salt);

    req.body.password = hashedpassword;

    const user = new User(req.body);

    await user.save();
    res
      .status(200)
      .send({ message: "user created successfully", status: true });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", status: false });
  }
});

router.post(`/login`, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(500)
        .send({ message: "user doesn't exist", status: false });
    }

    const matched = await becrypt.compare(req.body.password, user.password);
    if (!matched) {
      return res
        .status(500)
        .send({ message: "Incorrect password!", status: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      user.password = undefined;
      return res.status(200).send({
        message: "successfully LogedIn",
        status: true,
        token: token,
        user: user,
      });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: "Error in database" });
  }
});

module.exports = router;
