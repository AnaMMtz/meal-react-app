import React from 'react'
import AvailableMeals from 'components/Meals/availableMeals/AvailableMeals';
import styles from './cards.module.css';

const Cards = ({onClick}) => {
  return (
    <div className={styles.form} onClick={onClick}>
      <AvailableMeals />
    </div>
  )
}

export default Cards;