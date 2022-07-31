import { render } from "@testing-library/react";
import React from "react";
import Navigation from "./Navigation";
import * as axios from "axios";
import { connect } from "react-redux";

const NavigationContainer = (props) => {
  // React.useEffect(() => {
  //   axios
  //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       if (response.data.resultCode === 0) {
  //         let { id, login, email } = response.data.data;
  //         this.props.setAuthUserData(id, email, login);
  //       }
  //     }, []);
  // });

  return <Navigation {...this.props} />;
};

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login,
// });

// export default connect(mapStateToProps, { setAuthUserData })(
//   NavigationContainer
// );
