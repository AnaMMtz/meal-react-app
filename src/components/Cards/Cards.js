import React from 'react'
import AvailableMeals from 'components/Meals/availableMeals/AvailableMeals';
import styles from './cards.module.css';

const Cards = () => {
  return (
    <div className={styles.form}>
      <AvailableMeals />
    </div>
  )
}

export default Cards;