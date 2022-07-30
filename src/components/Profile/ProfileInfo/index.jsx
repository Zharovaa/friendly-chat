import React, { useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import AuthRedirect from '../../../hoc/AuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';

const ProfileContainer = props => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <ProfileInfo {...props} profile={props.profile} />;
};

let AuthRedirectComponent = AuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter,
  AuthRedirectComponent,
)(ProfileContainer);
