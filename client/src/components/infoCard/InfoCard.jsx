import React from 'react';
import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
  return (
    <div className='infoCard'>
      <div className='infoCard__header'>
        <h4>Your Information</h4>
        <div>
          <UilPen width='2.4rem' height='1.6rem' />
        </div>
      </div>
      <div className='infoCard__info'>
        <span className='infoCard__infoTitle'>
          <b>Status</b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className='infoCard__info'>
        <span className='infoCard__infoTitle'>
          <b>Lives in</b>
        </span>
        <span>Seattle</span>
      </div>
      <div className='infoCard__info'>
        <span className='infoCard__infoTitle'>
          <b>Works at</b>
        </span>
        <span>Google</span>
      </div>
      <button className='app__button infoCard__button'>Logout</button>
    </div>
  );
};

export default InfoCard;
