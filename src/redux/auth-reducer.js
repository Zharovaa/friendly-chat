import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case REMOVE_USER_DATA:
      return {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: (userId, email, login),
});

export const removeAuthUserData = () => ({
  type: REMOVE_USER_DATA,
});

// Second step of the logout functionality
export const getAuthUserData = () => dispatch => {
  return authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

// First step of the logout functionality
export const signIn = (email, password, rememberMe) => dispatch => {
  authAPI.signIn(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit('signIn', { email: 'Email is wrong' }));
    }
  });
};

// Sign-out the user from the account
export const signOut = () => dispatch => {
  console.log('Logout');
  authAPI.signOut().then(response => {
    if (response.data.resultCode === 0) {
      console.log('Resault code 0');
      dispatch(removeAuthUserData());
    }
  });
};
export default authReducer;
