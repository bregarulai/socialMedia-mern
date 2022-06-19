import User from '../models/UserModel.js';

export const registerUser = async (req, res, next) => {
  const { username, password, firstname, lastname } = req.body;
  const newUser = new User({ username, password, firstname, lastname });

  try {
    const savedUser = await newUser.save();
    const { password, isAdmin, createdAt, updatedAt, __v, ...userInfo } =
      savedUser._doc;
    res.status(201).json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
