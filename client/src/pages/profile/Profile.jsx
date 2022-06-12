import React from 'react';
import { Posts, ProfileCard, ProfileShare, Trending } from '../../components';

const Profile = () => {
  return (
    <div className='profilePage'>
      <ProfileShare />
      <div className='profilePage__center'>
        <ProfileCard />
        <Posts />
      </div>
      <Trending />
    </div>
  );
};

export default Profile;
