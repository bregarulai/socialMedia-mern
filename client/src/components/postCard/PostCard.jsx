import React from 'react';

import commentImg from '../../img/comment.png';
import shareImg from '../../img/share.png';
import heartImg from '../../img/like.png';
import notLikeImg from '../../img/notlike.png';

const PostCard = ({ post }) => {
  const { img, name, desc, likes, liked } = post;
  return (
    <div className='postCard'>
      <img src={img} alt={name} />
      <div className='postCard__reactions'>
        <img
          className='postCard__icon'
          src={liked ? heartImg : notLikeImg}
          alt='not liked icon'
        />
        <img className='postCard__icon' src={commentImg} alt='comment icon' />
        <img className='postCard__icon' src={shareImg} alt='share icon' />
      </div>
      <span>{`${likes} likes`}</span>
      <div className='postCard__details'>
        <span>
          <b>{name}</b>
        </span>
        <span>{` ${desc}`}</span>
      </div>
    </div>
  );
};

export default PostCard;
