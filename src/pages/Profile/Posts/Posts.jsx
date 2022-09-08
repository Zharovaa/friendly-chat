import React, { useState } from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { maxLengthCreator, required } from '../../../utils/validators/index';

const MyPosts = props => {
  /* Hook */
  const [value, setValue] = useState('');

  const maxLength10 = maxLengthCreator(10);
  const validation = required(value) || maxLengthCreator(10)(value);
  /* Add new post */
  let onAddPost = () => {
    props.addPost(value);
    setValue('');
  };

  return (
    <Container>
      <Typography
        sx={{
          color: ' #a985e9d9',
          fontFamily: 'Patrick Hand',
          fontWeight: '700',
          letterSpacing: '.2rem',
          display: 'flex',
          alignContent: 'center',
          justifyContent: ' center',
          padding: '30px 0',
        }}
        variant="h5"
      >
        My Posts
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          width: '100%',
          margin: '30px 0',
        }}
      >
        <TextField
          error={!!validation}
          helperText={validation}
          sx={{ width: '90%' }}
          id="standard-basic"
          label="Add description"
          variant="filled"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <Button
          sx={{ width: '10%' }}
          onClick={onAddPost}
          variant="contained"
          disabled={!!validation}
        >
          Add post
        </Button>
      </Stack>
      <div>New post</div>
      <div className={s.posts}>
        {props.posts.map((p, index) => (
          <Post message={p.message} likesCount key={index} />
        ))}
      </div>
    </Container>
  );
};

export default MyPosts;
