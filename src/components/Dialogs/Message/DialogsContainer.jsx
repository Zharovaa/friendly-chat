import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import updateNewMessageBodyCreator from './Message';
import { Redirect } from 'react-router';
import AuthRedirect from '../../../hoc/AuthRedirect'





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

let AuthRedirectComponent = AuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;