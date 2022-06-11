import React, { useState, useRef } from 'react';
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from '@iconscout/react-unicons';

import profileImg from '../../img/profileImg.jpg';

const Share = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  console.log(image);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        url: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className='share'>
      <img src={profileImg} alt='profile' />
      <div>
        <input type='text' placeholder="What's happening" />
        <div className='share__options'>
          <div
            className='share__option share__option--photo'
            onClick={() => imageRef.current.click()}
          >
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
          <button className='app__button share__button'>Share</button>
          <div style={{ display: 'none' }}>
            <input
              type='file'
              name='myImage'
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className='share__previewImg'>
            <div className='share__closeBtn' onClick={() => setImage(null)}>
              <UilTimes />
            </div>
            <img src={image.url} alt='preview' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
