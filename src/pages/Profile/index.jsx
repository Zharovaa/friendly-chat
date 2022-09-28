import React from 'react';

/* Components */
import ProfileContainer from './ProfileInfo';
import PostsContainer from './Posts';

const Profile = props => {
  return (
    <div className="profile-page">
      <ProfileContainer
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
