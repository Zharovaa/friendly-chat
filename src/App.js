import React from "react";

/* Styles */
import "./assets/scss/main.scss";

/* Components */
import Navigation from "./components/Navigation";
import UsersPage from "./pages/Users/";
import ProfilePage from "./pages/Profile/";
import SignIn from "./pages/SignIn/SignIn";
import MessagesPage from "./pages/Messages/";

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
          <Route path="/sign-in" render={() => <SignIn />} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
