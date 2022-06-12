import React from 'react';

import logo from '../../img/logo.png';

const Auth = () => {
  return (
    <div className='auth'>
      <div className='auth__leftSection'>
        <img className='auth__logo' src={logo} alt='logo' />
        <div className='auth__appName'>
          <h1>BCM Social</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className='auth__rightSection'>
        <h1>Form</h1>
      </div>
    </div>
  );
};

export default Auth;
