import { getAuthUserData } from "./auth-reducer";

// INITIAL STATE
let initialState = {
  // INITIALIZED
  initialized: false,
  // ERROR
  error: null,
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const appReducer = (
  state= initialState,
  action
) => {
  switch (action.type) {
    //   FOLLOW
    case "INITIALIZED_SUCCESS": {
      return {
        ...state,
        initialized: true,
      };
    }
    case "SHOW_ERROR": {
      // (ADD)SHOW ERROR
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  // FOLLOW ACTION CREATOR
  initializedSuccess: () =>
    ({
      type: "INITIALIZED_SUCCESS",
    } ),
  // SHOW ERROR ACTION CREATOR
  showError: (error) =>
    ({
      type: "SHOW_ERROR",
      error,
    } ),
};


// SET NEW DATA
export const initializeApp = () => (dispatch) => {
  try {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(actions.initializedSuccess());
    });
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export default appReducer;