/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

/* Components */
import User from "./Components/User";
import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  /* MapStateToProps */
  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
    followingInProgress,
  } = props;

  /* MapDispatchToProps */
  const {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
  } = props;

  /* Function after on click on the page */
  const loadUsers = (page = 1) => {
    setCurrentPage(page);
    toggleIsFetching(true);
    usersAPI.getUsers(page, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
    });
  };

  /* Getting the users when the page is loaded */
  useEffect(() => {
    loadUsers();
  }, []);

  /* Getting the count of the pages */
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  /* Creation of the array of the number (in order to show the pages) */
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Container fixed>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        Users
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "50vh",
        }}
      >
        {isFetching ? (
          <CircularProgress color="secondary" />
        ) : (
          users.map((user) => (
            <User user={user} follow={follow} unfollow={unfollow} />
          ))
        )}
      </Box>
      <Pagination
        count={pages.length}
        onChange={(event, value) => loadUsers(value)}
      />
    </Container>
  );
};
export default Users;
