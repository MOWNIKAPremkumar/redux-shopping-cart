import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import '../cart.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <div className="item-info">
        <span>{item.name}</span>
        <span>${item.totalPrice.toFixed(2)}</span>
      </div>
      <div className="item-controls">
        <button className="button" onClick={() => dispatch(removeItem(item.id))}>
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button className="button" onClick={() => dispatch(addItem({ ...item, quantity: 1  }))}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
