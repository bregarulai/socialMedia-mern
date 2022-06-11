import React from 'react';
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from '@iconscout/react-unicons';

import profileImg from '../../img/profileImg.jpg';

const Share = () => {
  return (
    <div className='share'>
      <img src={profileImg} alt='profile' />
      <div>
        <input type='text' placeholder="What's happening" />
        <div className='share__options'>
          <div className='share__option share__option--photo'>
            <UilScenery />
            <span>Photo</span>
          </div>
          <div className='share__option share__option--video'>
            <UilPlayCircle />
            <span>Video</span>
          </div>
          <div className='share__option share__option--location'>
            <UilLocationPoint />
            <span>Location</span>
          </div>
          <div className='share__option share__option--schedule'>
            <UilSchedule />
            <span>Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
