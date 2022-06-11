import React from 'react';

import coverImg from '../../img/cover.jpg';
import profileImg from '../../img/profileImg.jpg';

const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <div className='profileCard__images'>
        <img src={coverImg} alt='cover' />
        <img src={profileImg} alt='profile' />
      </div>
      <div className='profileCard__name'>
        <span>Son Goku</span>
        <span>Martial Arts</span>
      </div>
      <div className='profileCard__followStatus'>
        <hr />
        <div>
          <div className='profileCard__follow'>
            <span>4,507</span>
            <span>Followers</span>
          </div>
          <div className='profileCard__verticalLine'>&nbsp;</div>
          <div className='profileCard__follow'>
            <span>3</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
