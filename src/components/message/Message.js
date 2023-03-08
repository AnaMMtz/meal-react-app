import React from 'react';
import Cards from 'components/Cards';
import styles from './message.module.css';
import MealsSummary from './MealsSummary';

const Message = () => {
  return (
    <div className={styles.wrapper}>
    <MealsSummary/>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default Message