
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "friendly-chat.com",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "How are you?", likesCount: 12 },
        { id: 3, message: "Yo", likesCount: 12 },
        { id: 4, message: "Yo", likesCount: 12 },
        { id: 5, message: "Yo", likesCount: 11 },
      ],
      dialogs: [
        { id: 1, name: "Dashenka" },
        { id: 2, name: "Oleksii" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Polina" },
        { id: 5, name: "Misha" },
        { id: 6, name: "Sasha" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};



export default store;
