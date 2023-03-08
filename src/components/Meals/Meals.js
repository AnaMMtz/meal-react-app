import React from 'react'
import AvailableMeals from './availableMeals/AvailableMeals'
import MealsSummary from './mealsSummary/MealsSummary'
import styles from './Meals.module.css'
import Message from 'components/message/Message'
import Cards from 'components/Cards'

const Meals = () => {
  return (
    <div className={styles.form}>
      <MealsSummary />
      <AvailableMeals />
      {/* <Message />
      <Cards /> */}
    </div>
  )
}

export default Meals