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

      <LogIn />
      {/* <SignUp /> */}
    </div>
  );
};

const LogIn = () => {
  return (
    <div className='auth__login'>
      <form className='auth__form auth__form--signup'>
        <h3>Log In</h3>

        <div>
          <input
            type='text'
            placeholder='User Name'
            className='auth__input'
            name='username'
          />
        </div>

        <div>
          <input
            type='password'
            className='auth__input'
            placeholder='Password'
            name='password'
          />
        </div>

        <div>
          <span className='auth__signupMsg'>
            Don't have an account? Sign up!
          </span>
          <button className='app__button auth__button'>Login</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className='auth__signup'>
      <form className='auth__form auth__form--signup'>
        <h3>Sign up</h3>
        <div>
          <input
            className='auth__input'
            type='text'
            placeholder='First Name'
            name='firstname'
          />
          <input
            className='auth__input'
            type='text'
            placeholder='Last Name'
            name='lastname'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='User Name'
            name='username'
            className='auth__input'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='auth__input'
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            className='auth__input'
          />
        </div>
        <div>
          <span className='auth__signupMsg'>
            Already have an account? Login!
          </span>
        </div>
        <button
          className='app__button auth__button auth__button--signup'
          type='submit'
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
