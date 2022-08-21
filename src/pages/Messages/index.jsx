import { connect } from "react-redux";
import { sendMessageCreator } from "../../redux/messages-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import MessagesPage from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(sendMessageCreator(text));
    },
  };
};

/* Redirect included */
// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withRouter
//   withAuthRedirect
// )(MessagesPage);
export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
