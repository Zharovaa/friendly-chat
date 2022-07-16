import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  toggleIsFetching,
  unfollow,
} from '../redux/users-reducer';
import Users from './Users';
import setUsersTotalCount from './Users';
import toggleFollowingProgress from './Users';



let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const UsersContainer = props => {
//   useEffect(() => {
//     props.toggleIsFetching(true);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,{
//           withCredentials: true,
//         }
//       )
//       .then(response => {
//         props.toggleIsFetching(false);
//         props.setUsers(response.data.items);
//         props.setTotalUsersCount(response.data.totalCount);
//       });

//     onPageChanged = pageNumber => {
//       props.setCurrentPage(pageNumber);
//       props.toggleIsFetching(true);
//       axios.get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`, {
//           withCredentials: true,
//         })
//         .then(response => {
//           props.toggleIsFetching(false);
//           props.setUsers(response.data.items);
//         });
//       }
//   }, []);
// };

/*let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: isFetching => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(Users);
