import Cart from 'components/cart/Cart';
import React, { useContext } from 'react';

import CartContext from 'store/cart-context';
import styles from './modal.module.css';

const Modal = ({open, onClose}) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartAddHandler = item => {
    cartCtx.addItem({...item, amount:1});
  };

  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
      <ul className={styles['cart-items']}>
        {cartCtx.items.map(item => (
          <Cart 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={cartRemoveHandler.bind(null, item.id)}
            onAdd={cartAddHandler.bind(null, item)}
          />
        ))}
      </ul>
  );

  return (
    <>
    {/* {open &&  */}
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
      {cartItems}
      <div className={styles['first-card']}>
        <h2>Total Amount</h2>
        <p>{totalAmount}</p>
      </div>
      <div className={styles['confirm-btn']}>
        <button style={{marginRight:'1rem'}} onClick={onClose}>Close</button>
        {hasItems && <button >Order</button>}
      </div>
      </div>
    </div>
    </>
  )
}

export default Modal