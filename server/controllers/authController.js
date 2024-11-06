import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

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

export { signup };
