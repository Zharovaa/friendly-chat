import { CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import s from "./ProfileInfo.module.css";
import background from "../../../assets/img/profile-background.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <CircularProgress />;
  }
  return (
    <Container>
      <img src={props.profile.photos.large} />
      <Typography
        variant="h5"
        sx={{
          marginTop: "-46px",
          padding: "5px 30px",
          color: "white",
          backgroundColor: "#a985e9a3",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          position: "relative",
          fontWeight: "600",
          letterSpacing: ".2rem",
          fontFamily: "Patrick Hand",
        }}
      >
        Dasha Zharova
      </Typography>
    </Container>
  );
};

export default ProfileInfo;
