import bcrypt from 'bcrypt';

import User from '../models/UserModel.js';

//Get a user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      const { password, createdAt, updatedAt, isAdmin, __v, ...userInfo } =
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
