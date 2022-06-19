import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: 'String',
      required: true,
      unique: true,
    },
    password: {
      type: 'String',
      required: true,
    },
    firstname: {
      type: 'String',
      required: true,
    },
    lastname: {
      type: 'String',
      required: true,
    },
    isAdmin: {
      type: 'Boolean',
      default: false,
    },
    profileImg: String,
    coverImg: String,
    about: String,
    livesIn: String,
    worksAt: String,
    Country: String,
    relationship: String,
    followers: [],
    follwing: [],
  },
  { timestamps: true }
);

const User = mongoose.model('Users', UserSchema);
export default User;
