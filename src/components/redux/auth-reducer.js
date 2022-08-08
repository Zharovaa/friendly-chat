import authAPI from "./dialogs-reducer";

const SET_USER_DATA = "SET_USER_DATA";

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
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, signIn) => ({
  type: SET_USER_DATA,
  data: (userId, email, signIn),
});
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, signIn, email } = response.data.data;
      dispatch(setAuthUserData(id, email, signIn));
    }
  });
};
export default authReducer;
