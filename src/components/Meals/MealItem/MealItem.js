import React, { useContext } from 'react';
import CartContext from 'store/cart-context';
import MealItemForm from '../MealItemForm';
import styles from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price 
    });
  };
  return (
    <div>
      <li className={styles.meal}>
        <div>
          <h3 className={styles.name}>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>
            {price}
          </div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
      </li>
        <hr/>
    </div>
  )
}

export default MealItem;