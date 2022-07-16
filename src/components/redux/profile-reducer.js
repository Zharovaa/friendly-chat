const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.message,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
  case SET_USER_PROFILE: {
    return {...state, profile: action.profile}
  }
    default:
      return state;
  }
};

export const addPostActionCreator = text => ({
  type: 'ADD_POST',
  message: text,
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
