import React from "react";

/* Styles (modules) */
import s from "./Profile.module.css";

/* Components */
import ProfileContainer from "./ProfileInfo";
import PostsContainer from "./Posts";

const Profile = (props) => {
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
