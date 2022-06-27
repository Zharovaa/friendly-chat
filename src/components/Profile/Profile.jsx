import React from 'react';

/* Styles (modules) */ 
import s from './Profile.module.css';

/* Components */ 
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts';

const Profile = () => {
  return (
    <div className={s.profile_page}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
