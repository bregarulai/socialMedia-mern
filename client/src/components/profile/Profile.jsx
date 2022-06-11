import React from 'react';
import { LogoSearch, ProfileCard, FollowersCard } from '..';

const Profile = () => {
  return (
    <div className='profile'>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default Profile;
