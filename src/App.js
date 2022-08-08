import React from "react";

/* Styles */
import "./assets/scss/main.scss";

/* Components */
import Navigation from "./components/Navigation/Navigation";
import UsersPage from "./components/Users/";
import ProfilePage from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/Message/DialogsContainer";
import SignIn from "./components/SignIn/SignIn";

/* Libraries */
import { Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Container fixed sx={{ padding: "30px 0" }}>
        <Switch>
          <Route path="/dialogs" render={() => <DialogsPage />} />
          <Route path="/profile/:userId?" render={() => <ProfilePage />} />
          <Route path="/users" render={() => <UsersPage />} />
          <Route path="/sign in" render={() => <SignIn />} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
