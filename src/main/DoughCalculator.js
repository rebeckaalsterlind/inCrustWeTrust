import React, { useState, useEffect } from 'react';
import Calculate from './Calculate';
import Recipe from './Recipe';

function DoughCalculator() {
  
  const [weight, setWeight] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [total, setTotal] = useState([]);
  const [yeast, setYeast] = useState([]);

  return (
    <>
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
    </>
  )
}

export default DoughCalculator;