import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import updateNewMessageBodyCreator from "./Message";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

/* Redirect included */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(Dialogs);
