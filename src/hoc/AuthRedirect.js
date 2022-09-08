import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function withAuthRedirect(Component) {
  function RedirectContainer(props) {
    useEffect(() => {
      console.log(props.isAuth);
    }, [props.isAuth]);
    if (!props.isAuth) return <Redirect to={'/sign-in'} />;
    return <Component {...props} />;
  }
  let mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuth,
  });
  return connect(mapStateToPropsForRedirect)(RedirectContainer);
}
