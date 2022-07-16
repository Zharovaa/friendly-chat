import React, { useEffect } from 'react';
import * as axios from 'axios';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';


const Users = props => {
  // Getting the users when the page is loaded
  useEffect(() => {
    props.toggleIsFetching(true);
    usersAPI.getUsers(props.currentPage, props.pageSize).then(data => {
        props.toggleIsFetching(false);
        props.setUsers(data.items);
      });
  }, []);

  // Function after on click on the page
  const onPageChanged = (event, value) => {
    props.setCurrentPage(value);
    props.toggleIsFetching(true);
    usersAPI.getUsers(event, props.pageSize)
      .then(data => {
        props.toggleIsFetching(false);
        props.setUsers(data.items);
      });
  };

  // Getting the count of the pages
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // Creation of the array of the number (in order to show the pages)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  /* Unfollow functionality */
  async function unfollowUser() {
    
      props.toggleFollowingProgress(true, Users.id);
  
    await axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${Users.id}`,
        {
          withCredentials: true,
          headers: {
            'API-KEY': '9a450d4a-5747-4ddd-acd5-0693071efaea',
          },
        }
      )
      .then(response => {
        if (response.data.resultCode === 0) {
          props.follow(Users.id);
        }
        props.toggleFollowingProgress(false, Users.id);
      });
  }

  /* follow functionality */
  async function followUser() {
    await axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${Users.id}`,
        {},
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.resultCode === 0) {
          props.follow(Users.id);
        }
      });
  }
  return (
    <div>
      <Typography variant="h3" sx={{ marginBottom: '20px' }}>
        Users
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '50vh',
        }}
      >
        {props.isFetching ? (
          <CircularProgress color="secondary" />
        ) : (
          props.users.map(user => (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px solid grey',
                justifyContent: 'space-between',

                paddingBottom: '20px',
              }}
              key={user.id}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <NavLink to={'/profile/' + user.id}>
                  <Avatar alt="Remy Sharp" src={user.photos.small} />
                </NavLink>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                  }}
                >
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="subtitle1">{user.status}</Typography>
                </Box>
              </Box>
              {user.followed ? (
                <Button disabled={props.followingInProgress}variant="contained" onClick={unfollowUser}>
                  Unfollow
                </Button>
              ) : (
                <Button disabled={props.followingInProgress} variant="contained" onClick={followUser}>
                  Follow
                </Button>
              )}
            </Box>
          ))
        )}
      </Box>
      <Pagination count={pages.length} onChange={onPageChanged} />
    </div>
  );
};

export default Users;
