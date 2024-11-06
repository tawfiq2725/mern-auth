import dotenv from "dotenv";
dotenv.config();
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

const signup = async (req, res, next) => {
  try {
    const { user_name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const users = new User({
      user_name,
      email,
      password: hashPassword,
    });
    await users.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid Email"));
    }
    const checkPass = bcrypt.compareSync(password, validUser.password);
    if (!checkPass) {
      return next(errorHandler(401, "Invalid Password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("Access_Token", token, {
        httpOnly: true,
        maxAge: 1000 * 72 * 12 * 60,
      })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};

export { signup, signin };
