import React from "react";
import { NavLink } from "react-router-dom";
import MyApp from "../Paypal/Paypal";
import classes from "./CartTotals.css";
const CartTotals = ({ value,history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className={classes.Container}>
      <NavLink to="/shop">
        <button className={classes.Btn} onClick={() => clearCart()}>
          Clear Cart
        </button>
      </NavLink>
      <h3>
        <strong>SUBTOTAL : </strong>£{cartSubTotal}
      </h3>
      <h3>
        <strong>Tax : </strong>£{cartTax}
      </h3>
      <h3>
        <strong>TOTAL : </strong>£{cartTotal}
      </h3>
      <MyApp/>
    </div>
  );
};

export default CartTotals;
