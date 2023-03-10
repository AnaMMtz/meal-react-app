import React from 'react';
import styles from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.header}>Delicious Food, Delivered To You</h1>
    <p>Chose yur favorite meal from our brand selection of available meals and enjoy a delicios lunch or dinner at home </p>
    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
  </div>
  )
}

export default MealsSummary