import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";

import Header from "./layout/Header";
import FirebaseConfig from "./config/FirebaseConfig";

//INITIALISING FIREBASE
firebase.initializeApp(FirebaseConfig);

const App = () => {
  const [global, setGlobal] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser, global, setGlobal }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
