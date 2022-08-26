import Navigation from './Navigation'

import { connect } from "react-redux";
import { signOut } from '../../redux/auth-reducer';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (email, password, rememberMe) => {
      dispatch(signOut(email, password, rememberMe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
