
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import '../productList.css';

const products = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 1.2 },
  { id: 3, name: 'Orange', price: 1.8 },
  { id: 4, name: 'Mango', price: 2.0 },
  { id: 4, name: 'Strawberry', price: 2.5 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({ ...prev, [id]: parseInt(value) || 0 }));
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div>
              {product.name} - ${product.price}
            </div>
            <div className="product-controls">
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={e => handleQuantityChange(product.id, e.target.value)}
                className="quantity-input"
              />
              <button
                className="button"
                onClick={() =>
                  dispatch(addItem({ ...product, quantity: quantities[product.id] || 1 }))
                }
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
