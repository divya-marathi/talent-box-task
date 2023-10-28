const { userModel } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const { response } = require("express");

const client = new OAuth2Client(
  "1054313674399-0rd1oavdh8limfcqh8gffvi20q1grq32"
);
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
    }else{
      if(isGoogleSigning){
    
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({
        email,
        password: hashedPassword,
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

  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res
        .status(204)
        .json({ status: false, message: "Email id already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      password: hashedPassword,
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

const googleSignIn = async (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "547636078489-kfggsb7h20h7l82qihkg7ik0mnl6tgte.apps.googleusercontent.com ",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response.payload);
    });
};

module.exports = { login, signin, googleSignIn };
