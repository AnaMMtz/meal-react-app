import React from 'react';
import Cards from 'components/Cards';
import styles from './message.module.css';
import MealsSummary from './MealsSummary';

const Message = ({onClose}) => {
  return (
    <div className={styles.wrapper} onClick={onClose}>
    <MealsSummary/>
      <div>
        <Cards onClick={onClose}/>
      </div>
    </div>
  )
}

export default Message