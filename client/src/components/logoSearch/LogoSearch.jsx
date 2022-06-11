import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

import logo from '../../img/logo.png';

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={logo} alt='logo' />
      <div className='logoSearch__search'>
        <input type='text' placeholder='#Explore' />
        <div className='logoSearch__s-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
