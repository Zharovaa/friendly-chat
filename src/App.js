import React from 'react';
import UsersContainer from './components/Users/UsersContainer';
/* Styles */
import './assets/scss/main.scss';

/* Components */
// import Navbar from './components/Navbar/Navbar';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/Message/DialogsContainer';

/* Libraries */
import { Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';


const App = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Container fixed sx={{ padding: '30px 0' }}>
        <Switch>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
