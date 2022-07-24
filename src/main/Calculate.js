import React, { useState, useEffect } from 'react';
import calcRecipe from '../functions/calcRecipe';
import changeType from '../functions/changeType';
import calcYeast from '../functions/calcYeast';
import './calculate.css';


function Calculate({getWeight, getRecipe, getTotal, getYeast}) {
  
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

  const initialYeast =  [
    {name: "flour", value: Number(151)},
    {name: "type", value: "IDY"},
    {name: "temp", value: Number(21)}, 
    {name: "tempScale", value: "c"},
    {name: "time", value: Number(8)}, 
    {name: "amount", value: Number(0.14)}
  ];


  const [type, setType] = useState("Napolitana");
  const [weight, setWeight] = useState(initialWeight);
  const [ingredients, setIngredients] = useState(initialRecipe);
  const [totalWeight, setTotalWeight] = useState(initialWeight[0].amount * initialWeight[1].amount);
  const [yeast, setYeast] = useState(initialYeast)



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


  // calc recipe and sent state up to main
  useEffect(() => {
    //get calc recipe from exported function (ingredients)
    const callback = calcRecipe(ingredients, totalWeight);
    
    //set amount of flour for yeast calc
    updateYeast("flour", callback[0].amount)
    //setYeastFlour(callback[0].amount)
    
    //send state back to Main
    getRecipe(callback);
    getWeight(weight);
    getTotal(totalWeight);

  }, [ingredients, totalWeight]);


  //presets based on style
  useEffect(() => {

    //get new settings from exported func
    const getType = changeType(type);

    setWeight(getType.weight);
    setIngredients(getType.ingredients);

  }, [type])





  //update yeast with new object
  const updateYeast = (name, amount) => {
    setYeast(current =>
      current.map(obj => {
        if (obj.name === name) return {...obj, name: name, value: amount}
        return obj;
      })
    );
  };



  useEffect(() => {

    //call calcYeast function
    const yeastAmount = calcYeast(yeast);

    //send state back to main
    getYeast(yeastAmount);

  }, [yeast])

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
        
        <label htmlFor="type">Yeast: </label>
        <select 
          name="type" 
          type="string"
          value={yeast[1].value} 
          onChange={(e) => updateYeast(e.target.name, e.target.value)}>
          <option type="string" value="IDY">Instent Dry Yeast</option>
          <option type="string" value="CY">Compressed Yeast</option>
          <option type="string" value="ADY">Active Dry Yeast</option>
        </select>
        <br />
        <br />

        <label htmlFor="temp">Temperature leavening: </label>
        <input 
          name="temp" 
          type="number" 
          min="0" max="100" step="1" 
          value={yeast[2].value}
          onChange={(e) => updateYeast(e.target.name, Number(e.target.value))}
        /> 
        <select 
          name="tempScale" 
          type="string" 
          onChange={(e) => updateYeast(e.target.name, e.target.value)}>
          <option value="c">Celcius</option>
          <option value="f">Fahrenheit</option>
        </select>
        <br />

        <label htmlFor="time">Time leavening: </label>
        <input 
          name="time" 
          value={yeast[4].value}
          type="number" 
          min="0" max="100" step="1" 
          onChange={(e) => updateYeast(e.target.name, Number(e.target.value))}
        /> h
        <br />



{/* 
        <label htmlFor="cold temp">Cold temperature leavening: </label>
        <input 
          name="temp" 
          type="number" 
          min="0" max="100" step="1" 
          value={4}
          onChange={(e) => updateYeast(e.target.name, e.target.value)}
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
          onChange={(e) => updateYeast(e.target.name, e.target.value)}
        /> h
        <br />
             
        <label htmlFor="room temp">Room temperature: </label>
        <input 
          name="room temp" 
          type="number" 
          min="0" max="100" step=".5" 
        /> C°
        <br />
        <br /> */}

      </form>
    </section>
  )
}

export default Calculate;