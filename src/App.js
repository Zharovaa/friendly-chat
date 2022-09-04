import React from 'react';
import { connect } from 'react-redux';

/* Styles */
import './assets/scss/main.scss';

/* Components */
import Navigation from './components/Navigation';
import UsersPage from './pages/Users/';
import ProfilePage from './pages/Profile/';
import SignIn from './pages/SignIn';
import MessagesPage from './pages/Messages/';

/* Libraries */
import { Switch, Route, withRouter } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import { useDispatch } from 'redux-react-hook';
import { getAuthUserData } from './redux/auth-reducer';
import { compose } from 'redux';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Container fixed sx={{ padding: '30px 0' }}>
        <Switch>
          <Route path="/messages/:dialogId?" render={() => <MessagesPage />} />
          <Route path="/profile/:userId?" render={() => <ProfilePage />} />
          <Route path="/users" render={() => <UsersPage />} />
          <Route path="/sign-in" render={() => <SignIn />} />
        </Switch>
      </Container>
    </div>
  );
};

export default compose(
  withRouter,
  connect(null, {getAuthUserData}))(App)
;
