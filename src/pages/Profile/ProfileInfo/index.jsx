import React, { useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import getStatus from '../../../redux/profile-reducer';
import updateStatus from '../../../redux/profile-reducer';

const ProfileContainer = props => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId;
    }

    return axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        props.setUserProfile(response.data);
        props.getStatus(userId);
      });
  }, []);

  return (
    <ProfileInfo
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

/* Redirect included */
export default compose(
  connect(mapStateToProps, { setUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
