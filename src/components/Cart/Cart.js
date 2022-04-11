import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props.children);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4 className="text-3xl font-semibold pb-5">Order Summary</h4>
      <p className="text-lg font-medium pb-2">Selected Items: {quantity}</p>
      <p className="text-lg font-medium pb-2">Total price: ${total}</p>
      <p className="text-lg font-medium pb-2">Total Shipping: ${shipping}</p>
      <p className="text-lg font-medium pb-2">Tax: {tax}</p>
      <h5 className="text-xl font-semibold">
        Grand Total: {grandTotal.toFixed(2)}
      </h5>
      {props.children}
    </div>
  );
};

export default Cart;
