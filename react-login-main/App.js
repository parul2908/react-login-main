import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
        <Router>
          <Navbar />
          <AuthProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
          </Switch>
          </AuthProvider>
        </Router>
    </>
  );
}

export default App;