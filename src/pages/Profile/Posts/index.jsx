import MyPosts from "./Posts";

import { addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default PostsContainer;
