import bcrypt from 'bcrypt';

import User from '../models/UserModel.js';

//Get a user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      const { password, createdAt, isAdmin, updatedAt, __v, ...userInfo } =
        user._doc;
      res.status(200).json(userInfo);
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//Update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, isAdmin, password } = req.body;

  if (password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password, salt);
  }
  if (id === _id || isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      const { password, createdAt, updatedAt, isAdmin, __v, ...userInfo } =
        user._doc;
      res.status(200).json(userInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: 'Access denied!' });
  }
};
