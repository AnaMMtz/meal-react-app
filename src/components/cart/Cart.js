import React from 'react';
import styles from './cart.module.css';

const Cart = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  // const cartItems = <ul className={styles['cart-items']}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;
  return (
    <>
      <div className={styles['first-card']}>
        <div className={styles.products}>
          <p>{props.name}</p>
          <div className={styles.price}>
          <p>{price}</p>
          <div className={styles.quantity}>x {props.amount}</div>
          </div>
        </div>
        <div className={styles['btn-wrapper']}>
          {/* <div className={styles['products-btn']}>-</div> */}
          <button className={styles['products-btn']} onClick={props.onRemove}>-</button>
          {/* <div className={styles['products-btn']}>+</div> */}
          <button className={styles['products-btn']} onClick={props.onAdd}>+</button>
        </div>
      </div>
      <hr className={styles.line}/>
  </>
  )
}

export default Cart