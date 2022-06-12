import React from 'react';

import homeIcon from '../../img/home.png';
import notiIcon from '../../img/noti.png';
import commentIcon from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';

const Trending = () => {
  return (
    <div className='trending'>
      <div className='trending__navIcons'>
        <img className='trending__navIcon' src={homeIcon} alt='home nav icon' />
        <UilSetting />
        <img
          className='trending__navIcon'
          src={notiIcon}
          alt='notification nav icon'
        />
        <img
          className='trending__navIcon'
          src={commentIcon}
          alt='comment nav icon'
        />
      </div>
    </div>
  );
};

export default Trending;
