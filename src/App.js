import React from 'react';

/* Styles */ 
import './App.css';

/* Components */ 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/Message/DialogsContainer';

/* Libraries */ 
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path ="/users" element={<Users/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
