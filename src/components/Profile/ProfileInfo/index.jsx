import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <ProfileInfo {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

/* Redirect included */
export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
