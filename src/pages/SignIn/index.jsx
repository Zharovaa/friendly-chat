import SignIn from './SignIn'

import { connect } from "react-redux";
import { signIn } from '../../redux/auth-reducer';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password, rememberMe) => {
      dispatch(signIn(email, password, rememberMe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
