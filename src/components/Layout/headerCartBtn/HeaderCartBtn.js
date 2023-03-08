import React from 'react'
import cart from 'assets/shopping-cart_icon.png';
import styles from './headerCartBtn.module.css';

const HeaderCartBtn = ({open}) => {
  return (
    <button className={styles['cart-seccion']} onClick={open}>
      <span>
        <img src={cart} className={styles['cart-icon']} alt='cart-img'/>
      </span>
      <span className={styles['cart-title']}>
        Your Cart
      </span>
      <span className={styles.counter}>
        3
      </span>
    </button>
  )
}

export default HeaderCartBtn