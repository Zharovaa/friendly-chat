import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = ({ user, follow, unfollow }) => {
  /* Hooks */
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);

  /* Function after on click on the page */
  const followUser = (userId) => {
    setSubscriptionLoading(true);
    usersAPI.followUser(userId).then((data) => {
      follow(userId);
      setSubscriptionLoading(false);
    });
  };

  /* Function after on click on the page */
  const unfollowUser = (userId) => {
    setSubscriptionLoading(true);
    usersAPI.unfollowUser(userId).then((data) => {
      unfollow(userId);
      setSubscriptionLoading(false);
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
        justifyContent: "space-between",

        paddingBottom: "20px",
      }}
      key={user.id}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <NavLink to={"/profile/" + user.id}>
          <Avatar alt="Remy Sharp" src={user.photos.small} />
        </NavLink>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="subtitle1">{user.status}</Typography>
        </Box>
      </Box>
      {user.followed ? (
        <Button
          variant="contained"
          onClick={() => unfollowUser(user.id)}
          disabled={subscriptionLoading}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => followUser(user.id)}
          disabled={subscriptionLoading}
        >
          Follow
        </Button>
      )}
    </Box>
  );
};

export default User;
