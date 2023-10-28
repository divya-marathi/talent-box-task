const { userModel } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const login = async (req, res) => {
  const { email, password, isGoogleSigning, name } = req.body;

  try {
    const existUser = await userModel.findOne({ email, password });
    if (existUser) {
      const token = jwt.sign({ userId: existUser._id }, "secretKey", {
        expiresIn: "1h",
      });
      return res.status(202).json({
        status: true,
        message: "login success",
        user: existUser._id,
        token,
      });
    } else {
      if (isGoogleSigning) {
        //
        const newUser = new userModel({
          email,
          password,
          name,
        });

        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, "secretKey", {
          expiresIn: "7d",
        });
        return res.status(202).json({
          status: true,
          message: "registration success",
          token,
        });
      }
    }

    return res.status(400).json({ status: false, message: "login failed" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const signin = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(req.body);
  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res
        .status(204)
        .json({ status: false, message: "Email id already exists" });
    }

    const newUser = new userModel({
      email,
      password,
      name,
    });

    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "secretKey", {
      expiresIn: "7d",
    });

    return res.status(202).json({
      status: true,
      message: "registration success",
      token,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { login, signin };
