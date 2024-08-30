import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import "../cart.css";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart</h2>
      <p className="cart-info">Total Items: {totalQuantity}</p>
      <p className="cart-info">Total Price: ${totalPrice.toFixed(2)}</p>
      <ul className="cart-list">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <button className="button clear-cart" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
