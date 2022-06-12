import React from 'react';

import { trendData } from '../../data/trendData';

const TrendingCard = () => {
  return (
    <div className='trendingCard'>
      <h3>Trends for you</h3>
      {trendData.map((trend, i) => (
        <div key={trend.name + i} className='trendingCard__trend'>
          <span>#{trend.name}</span>
          <span>{`${trend.shares}k shares`}</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
