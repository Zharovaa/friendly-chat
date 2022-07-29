import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import updateNewMessageBodyCreator from './Message';




let mapStateToProps = (state) => {
  
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

let AuthRedirectComponent = (props) => {
  if (!props.isAuth === false) return <Redirect to="/login" />;
  return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;