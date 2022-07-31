import React, { useEffect, useState } from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const MyPosts = (props) => {
  /* Hook */
  const [value, setValue] = useState("");

  /* Add new post */
  let onAddPost = () => {
    props.addPost(value);
    setValue("");
  };

  return (
    <Container>
      <Typography
        sx={{
          color: " #a985e9d9",
          fontFamily: "Patrick Hand",
          fontWeight: "700",
          letterSpacing: ".2rem",
          display: "flex",
          alignContent: "center",
          justifyContent: " center",
          padding: "30px 0",
        }}
        variant="h5"
      >
        My Posts
      </Typography>
      <Box
        sx={{
          width: "100%",
          margin: "30px 0",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "nowrap",
          flexDirection: "row",
        }}
      >
        <TextField
          sx={{
            width: "90%",
          }}
          id="standard-basic"
          label="Message"
          variant="standard"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Button
          sx={{
            width: "10%",
          }}
          onClick={onAddPost}
          variant="contained"
        >
          Add post
        </Button>
      </Box>
      <div>New post</div>
      <div className={s.posts}>
        {props.posts.map((p) => (
          <Post message={p.message} likesCount key={p.likesCount} />
        ))}
      </div>
    </Container>
  );
};

export default MyPosts;
