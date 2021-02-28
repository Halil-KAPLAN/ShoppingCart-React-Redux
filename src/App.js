import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";


const App = (props) => {
  return (
    <div className="App">
      <h1>
        Shopping Cart 🛒 &nbsp;
        <img src="https://avatars3.githubusercontent.com/u/60869810?v=4" />
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(App);
