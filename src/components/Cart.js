import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { increaseCart, decreaseCart, removeCart } from "../actions";

const Cart = (props) => {
  const totalCartAmount = props.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const totalCartCount = props.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>Cart</span>
      </h2>

      <h3>Total items in cart: {totalCartCount}</h3>
      <h3>Total Amount of Cart: &#8378; {totalCartAmount}</h3>

      {props.cart.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378;{book.price}</p>
            <p>Total: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p>
              You have a total of <b>{book.count}</b> of this book in your cart.
            </p>
            <button
              onClick={() => {
                props.decreaseCart(book.id);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                props.removeCart(book.id);
              }}
            >
              Remove from Cart
            </button>
            <button
              onClick={() => {
                props.increaseCart(book.id);
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  increaseCart,
  decreaseCart,
  removeCart,
})(Cart);
