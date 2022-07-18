import React, { useState, useEffect } from 'react';
import {calcRecipe} from '../functions/calcRecipe';
import './calculate.css';


function Calculate({getWeight, getRecipe, getTotal}) {
  
  const renderIngredients = ["water", "salt", "sugar", "oil"];

  const initialWeight =  [
    {name: "doughballs", amount: 1},
    {name: "ballWeight", amount: 250}
  ];

  const initialRecipe =  [
    {name: "water", amount: 63},
    {name: "salt", amount: 62.5}, 
    {name: "sugar", amount: 0}, 
    {name: "oil", amount: 0}
  ];

  const [type, setType] = useState("Napolitana");
  const [weight, setWeight] = useState(initialWeight);
  const [ingredients, setIngredients] = useState(initialRecipe);
  const [totalWeight, setTotalWeight] = useState(initialWeight[0].amount * initialWeight[1].amount);
  
  //update ingredients with new object
  const updateIngredients = (name, amount) => {
    setIngredients(current =>
      current.map(obj => {
        if (obj.name === name) {
          return {...obj, name: name, amount: Number(amount)}
        }
        return obj;
      }),
    );
  };
  
  //update weight with new object
  const updateWeight = (name, amount) => {
    setWeight(current =>
      current.map(obj => {
        if (obj.name === name) {
          return {...obj, name: name, amount: Number(amount)}
        }
        return obj;
      }),
    );
  };

  //calc total weight of dough
  useEffect(() => {
    setTotalWeight(weight[0].amount * weight[1].amount)
  }, [weight]);

  useEffect(() => {
    //get calc recipe from exported function (ingredients)
    const callback = calcRecipe(ingredients, totalWeight);
    
    //send state back to Main
    getRecipe(callback);
    getWeight(weight);
    getTotal(totalWeight);

  }, [ingredients]);

  useEffect(() => {
    //get calc recipe from exported function (ingredients)
    const callback = calcRecipe(ingredients, totalWeight);
    
    //send state back to Main
    getRecipe(callback);
    getWeight(weight);
    getTotal(totalWeight);
    
  }, [totalWeight]);


  //presets based on style
  useEffect(() => {

    let doughballs;
    let ballWeight;
    let water;
    let salt;
    let sugar;
    let oil;

    switch(type) {
      case "Napolitana":
        doughballs = 1;
        ballWeight = 250;
        water = 63;
        salt = 2.5;
        sugar = 0;
        oil = 0;
        break;
      case "New York":
        doughballs = 1;
        ballWeight = 220;
        water = 62;
        salt = 2.5;
        sugar = 1;
        oil = 1;
        break;
      case "Deep Dish":
        doughballs = 1;
        ballWeight = 600;
        water = 60;
        salt = 2.5;
        sugar = 0;
        oil = 2;
        break;
      default:
    } 

    const newWeight= [
      {name: "doughballs", amount: doughballs},
      {name: "ballWeight", amount: ballWeight}
    ];
    
    const newIngredients = [
      {name: "water", amount: water},
      {name: "salt", amount: salt}, 
      {name: "sugar", amount: sugar}, 
      {name: "oil", amount: oil},
    ];

    setWeight(newWeight);
    setIngredients(newIngredients);

  }, [type])



  return (

    <section className="calculate">
      <h3>Choose your settings</h3>
      <form>
        <label htmlFor="type">Type of pizza: </label>
        <select name="type" onChange={(e) => setType(e.target.value)} >
          <option value="Napolitana">Napolitana</option>
          <option value="New York">New York</option>
          <option value="Deep Dish">Deep Dish</option>
        </select>
        <br /><br />

        <label htmlFor="doughballs">Doughballs: </label>
        <input 
          name="doughballs" 
          type="number" 
          min="1" max="1000" step="1" 
          value={weight[0].amount} 
          onChange={(e) => updateWeight(e.target.name, e.target.value)}
        />
        <br />

        <label htmlFor="ballWeight">Ball weight: </label>
        <input 
          name="ballWeight" 
          type="number" min="1" max="1000" step="1" 
          value={weight[1].amount} 
          onChange={(e) => updateWeight(e.target.name, e.target.value)}
        /> g
  
        <br /><br />

        {/* later issue: map trough this instead */}
        {renderIngredients.map((i, index) => {
          return (
          <>
            <label htmlFor={i}>{i}:</label>
            <input 
              name={i} 
              type="number" 
              min="0" max="100" step=".5" 
              value={ingredients[index].amount} 
              onChange={(e) => updateIngredients(e.target.name, e.target.value)}
            />%
            <br />
          </>
          )}
        )}

        <br />
        <br />

        <label htmlFor="yeast">Yeast: </label>
        <select name="yeast" >
          <option value="idy">IDY</option>
          <option value="cy">CY</option>
          <option value="ady">ADY</option>
          <option value="fsd">FSD</option>
          <option value="lsd">LSD</option>
        </select>
        <br />
        <br />

        <label htmlFor="cold temp">Cold temperature leavening: </label>
        <input 
          name="cold leavening" 
          type="number" 
          min="0" max="100" step="1" 
          value={4}
        /> h
        <br />

        <label htmlFor="cold temp">Cold temperature: </label>
        <input 
          name="cold temp" 
          type="number" 
          min="0" max="100" step=".5" 
        /> C°
        <br />
        <br />

        <label htmlFor="room temp">Room temperature leavening: </label>
        <input 
          name="room leavening" 
          type="number" 
          min="0" max="100" step="1" 
          value={21}
        /> h
        <br />
             
        <label htmlFor="room temp">Room temperature: </label>
        <input 
          name="room temp" 
          type="number" 
          min="0" max="100" step=".5" 
        /> C°
        <br />
        <br />

      </form>
    </section>
  )
}

export default Calculate;