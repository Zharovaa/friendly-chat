import Navigation from './Navigation';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { signOut } from '../../redux/auth-reducer';
import { render } from '@testing-library/react';

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
