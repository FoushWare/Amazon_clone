import './App.css';
import React, { useEffect } from 'react';
import Header from './Header/Header'
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './DataLayer/StateProvider';
function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null

        })
      }

    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />

          </Route>

          <Route path="/login">
            <Login />

          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
