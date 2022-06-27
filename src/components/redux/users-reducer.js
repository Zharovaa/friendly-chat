const ADD_POST = 'ADD_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({
  type: 'ADD_POST',
  message: text
});


export default usersReducer;
