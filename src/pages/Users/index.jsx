import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  toggleIsFetching,
  unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import toggleFollowingProgress from './Users';
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsersSuperSelector,
} from '../../redux/users-selectors';

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingProgress,
})(Users);
