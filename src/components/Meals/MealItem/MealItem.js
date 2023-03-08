import React from 'react';
import MealItemForm from '../MealItemForm';
import styles from './MealItem.module.css';

const MealItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <li className={styles.meal}>
        <div>
          <h3 className={styles.name}>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>
            {price}
            {/* <hr/> */}
          </div>
          
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
        <hr/>
    </div>
  )
}

export default MealItem