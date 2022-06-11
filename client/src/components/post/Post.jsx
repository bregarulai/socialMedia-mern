import React from 'react';

import { postsData } from '../../data/postData';

const Post = () => {
  return (
    <div className='post'>
      {postsData.map((post, i) => (
        <div>{post.desc}</div>
      ))}
    </div>
  );
};

export default Post;
