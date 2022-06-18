import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action='' className='profileModal__form'>
        <h3>User's info</h3>
        <div>
          <input
            type='text'
            className='profileModal__input'
            name='firstname'
            placeholder='First Name'
          />
          <input
            type='text'
            className='profileModal__input'
            name='lastname'
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            type='text'
            className='profileModal__input'
            name='worksAt'
            placeholder='Works At'
          />
        </div>
        <div>
          <input
            type='text'
            className='profileModal__input'
            name='livesIn'
            placeholder='Lives In'
          />
          <input
            type='text'
            className='profileModal__input'
            name='country'
            placeholder='Country'
          />
        </div>
        <div>
          <input
            type='text'
            className='profileModal__input'
            name='relationship'
            placeholder='Relationship Status'
          />
        </div>
        <div>
          <span>Profile Image</span>
          <input type='file' name='profileImg' />
          <span>Cover Image</span>
          <input type='file' name='coverImg' />
        </div>
        <button className='app__button profileModal__button'>Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
