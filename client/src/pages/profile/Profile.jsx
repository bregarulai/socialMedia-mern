import React from 'react';
import { Posts, ProfileCard, ProfileShare } from '../../components';

const Profile = () => {
  return (
    <div className='profilePage'>
      <ProfileShare />
      <div className='profilePage__center'>
        <ProfileCard />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
