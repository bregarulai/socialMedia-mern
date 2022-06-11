import React from 'react';

import { followers } from '../../data/followersData';

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      {followers.map((follower, index) => (
        <div key={follower.name + index} className='followersCard__follower'>
          <div>
            <img
              src={follower.img}
              alt={follower.name}
              className='followerCard__image'
            />
            <div className='followerCard__name'>
              <span>{follower.name}</span>
              <span>{follower.username}</span>
            </div>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
