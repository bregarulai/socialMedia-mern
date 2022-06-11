import React from 'react';

import { postsData } from '../../data/postData';
import { PostCard } from '..';

const Post = () => {
  return (
    <div className='post'>
      {postsData.map((post, i) => (
        <PostCard key={post.name + i} post={post} />
      ))}
    </div>
  );
};

export default Post;
