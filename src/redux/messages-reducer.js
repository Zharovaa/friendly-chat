const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.message }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (text) => ({
  type: "SEND_MESSAGE",
  message: text,
});

export default messagesReducer;
