import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import * as axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-reducer';

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

let AuthRedirectComponent = (props) => {
  if (!props.isAuth === false) return <Redirect to="/login" />;
  return <ProfileContainer {...props}/>
}


let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter(AuthRedirectComponent),
  connect(mapStateToProps, { setUserProfile })
)(ProfileContainer);
