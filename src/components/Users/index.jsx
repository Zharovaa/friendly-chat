import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../redux/users-reducer";
import Users from "./Users";
import setUsersTotalCount from "./Users";
import toggleFollowingProgress from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(Users);
