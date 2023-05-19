import React,{ useContext, useEffect} from 'react'
import cart from 'assets/shopping-cart_icon.png';
import styles from './headerCartBtn.module.css';
import CartContext from 'store/cart-context';
import { useState } from 'react';

const HeaderCartBtn = ({open}) => {
  const cartCtx = useContext(CartContext);
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  
  const { items } = cartCtx;

  const numberOfItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${styles['cart-seccion']} ${btnHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }

    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    };

  }, [items])
  return (
    <button className={btnClasses} onClick={open}>
      <span>
        <img src={cart} className={styles['cart-icon']} alt='cart-img'/>
      </span>
      <span className={styles['cart-title']}>
        Your Cart
      </span>
      <span className={styles.counter}>
        {numberOfItems}
      </span>
    </button>
  )
}

export default HeaderCartBtn