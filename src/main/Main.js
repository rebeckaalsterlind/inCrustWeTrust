import React, { useState, useEffect } from 'react';
import './main.css';
import Calculate from './Calculate';
import Recipe from './Recipe';

function Main() {
  
  const [weight, setWeight] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [total, setTotal] = useState([]);
  const [yeast, setYeast] = useState([]);

  useEffect(() => {
    console.log("in main", yeast);
  }, [yeast])
  

  return (
    <main>
      <Calculate 
        getWeight={newWeight => setWeight(newWeight)}
        getRecipe={newRecipe => setIngredients(newRecipe)} 
        getTotal={newTotal => setTotal(newTotal)}
        getYeast={newYeast => setYeast(newYeast)}
      />
      <Recipe 
        weight={weight}
        ingredients={ingredients}
        total={total}
        yeast={yeast}
      />
    </main>
  )
}

export default Main;