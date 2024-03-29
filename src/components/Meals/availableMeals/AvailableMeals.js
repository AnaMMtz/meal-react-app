import React from 'react';
import Card from 'components/card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from '../MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitsel',
    description: 'A germen specialty',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Greeb Bowl',
    description: 'Healthy... and green...',
    price: 18.99
  }
]

const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price}
    />
  )); 

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
          
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals