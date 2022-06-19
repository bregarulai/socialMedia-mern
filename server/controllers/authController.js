import bcrypt from 'bcrypt';

import User from '../models/UserModel.js';

//Register User
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPass,
    firstname,
    lastname,
  });

  try {
    const savedUser = await newUser.save();
    const { password, createdAt, updatedAt, __v, isAdmin, ...userInfo } =
      savedUser._doc;
    res.status(201).json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

//Login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const { password, createdAt, updatedAt, isAdmin, __v, ...userInfo } =
          user._doc;
        res.status(200).json(userInfo);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
