import React from 'react';
import { Posts, Profile, Trending } from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <Profile />
      <Posts />
      <Trending />
    </div>
  );
};

export default Home;
