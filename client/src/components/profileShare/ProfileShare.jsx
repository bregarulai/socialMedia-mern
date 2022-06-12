import React from 'react';

import { InfoCard, LogoSearch, FollowersCard } from '..';

const ProfileShare = () => {
  return (
    <div className='profileShare'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileShare;
