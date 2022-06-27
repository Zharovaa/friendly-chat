import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import updateNewMessageBodyCreator from './Message';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;