import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions";

const Products = (props) => {
  const totalCartCount = props.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/cart">
          Cart {totalCartCount ? "(" + totalCartCount + ")" : ""}
        </Link>
      </h2>

      {props.bookList.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button
              onClick={() => {
                props.addToCart(book);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  cart: state.cart,
});

const mapActionsToProps = { addToCart };

export default connect(mapStateToProps, mapActionsToProps)(Products);
