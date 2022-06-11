import React from 'react';
import { Posts, Profile } from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <Profile />
      <Posts />
      <div className='home__trending'>Trending</div>
    </div>
  );
};

export default Home;
