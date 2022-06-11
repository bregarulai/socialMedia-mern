import React from 'react';
import { Profile } from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__profile'>
        <Profile />
      </div>
      <div className='home__posts'>Posts</div>
      <div className='home__trending'>Trending</div>
    </div>
  );
};

export default Home;