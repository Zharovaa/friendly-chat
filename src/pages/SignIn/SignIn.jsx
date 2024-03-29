import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { maxLengthCreator, required } from '../../utils/validators/index';

import { Redirect } from 'react-router';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn(props) {
  const [values, setValues] = React.useState({
    email: 'niobium1441@gmail.com',
    password: 'Galexi888',
    rememberMe: false,
  });

  const handleChange = (prop, value) => {
    setValues({ ...values, [prop]: value });
  };

  const submitData = () => {
    console.log('SignIn: ', values);
    props.signIn(values.email, values.password, values.rememberMe);
    return setValues({
      email: '',
      password: '',
      rememberMe: false,
    });
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={props.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            {...props.error}
            error={!!required(values.email)}
            helperText={required(values.email)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={event => handleChange('email', event.target.value)}
            autoFocus
          />
          <TextField
            error={!!required(values.password)}
            helperText={required(values.password)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={event => handleChange('password', event.target.value)}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                checked={values.rememberMe}
                onChange={event =>
                  handleChange('rememberMe', event.target.checked)
                }
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            disabled={!(values.email && values.password)}
            fullWidth
            onClick={() => submitData()}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
