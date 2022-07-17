import React, { useState, useEffect } from 'react';
import './main.css';
import Calculate from './Calculate';
import Recipe from './Recipe';

function Main() {
  
  const [weight, setWeight] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
 console.log('we', weight);
  }, [weight])
  return (
    <main>
      <Calculate 
        getWeight={newWeight => setWeight(newWeight)}
        getRecipe={newRecipe => setIngredients(newRecipe)} 
        getTotal={newTotal => setTotal(newTotal)}
      />
      <Recipe 
        weight={weight}
        ingredients={ingredients}
        total={total}
      />
    </main>
  )
}

export default Main;