import './App.css';
import React, { useEffect } from 'react';
import Header from './Header/Header'
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './DataLayer/StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_fuaXFY7JMoqGW1Nse7gLc70u"
);
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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

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
