import React, { useState, useEffect } from 'react';
import './calculate.css';


function Calculate({getWeight, getRecipe, getTotal}) {
  
  const initialWeight =  [
    {name: "doughballs", amount: 1},
    {name: "ballWeight", amount: 250}
  ];

  const initialRecipe =  [
    {name: "water", amount: Number(60)},
    {name: "salt", amount: 60}, 
    {name: "sugar", amount: 2.5}, 
    {name: "oil", amount: 60}
  ];

  const [type, setType] = useState("Napolitana");
  const [weight, setWeight] = useState(initialWeight);
  const [ingredients, setIngredients] = useState(initialRecipe);
  const [totalWeight, setTotalWeight] = useState(250);
  
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

  useEffect(() => {
    //calc total weight of dough
    setTotalWeight(weight[0].amount * weight[1].amount)
  }, [weight]);

  useEffect(() => {
     recipe();
  }, [ingredients]);

  useEffect(() => {
    recipe();
  }, [totalWeight]);


  function recipe() {

    //setting new recipe
    const newIngredients = [
      {name: "water", amount: ingredients[0].amount},
      {name: "salt", amount: ingredients[1].amount}, 
      {name: "sugar", amount: ingredients[2].amount}, 
      {name: "oil", amount: ingredients[3].amount},
    ];

    //sum all ingredients for total % apart from flour
    let remaining = 0;

    newIngredients.forEach(i => {
      remaining += Number(i.amount);
      i.amount = i.amount/100; 
    });

    //calc amount on flour
    let flour = (totalWeight * 100) / (100 + remaining);

    //calc amount of each ingredient based on flour
    newIngredients.forEach(i =>  i.amount = i.amount * flour);
    
    // //update flour in arr
    // const index = newIngredients.findIndex((i) => i.name === "flour");
    // newIngredients[index] = {name: "flour", amount: Number(flour)};
    newIngredients.push({name: "flour", amount: Number(flour)})
   
    //set new ingredients state
    getRecipe(newIngredients);
    getWeight(weight);
    getTotal(totalWeight);
  };

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
        sugar = 1;
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

    const newIngredients = [
      {name: "water", amount: water},
      {name: "salt", amount: salt}, 
      {name: "sugar", amount: sugar}, 
      {name: "oil", amount: oil},
    ];


    const newWeight= [
      {name: "doughballs", amount: doughballs},
      {name: "ballWeight", amount: ballWeight}
    ];
    setIngredients(newIngredients);
    setWeight(newWeight);

  }, [type])



  return (

    <section className="set-recipe">
      <form>
        <label htmlFor="type"> Type of pizza</label>
        <br />
        <select name="type" onChange={(e) => setType(e.target.value)} >
          <option value="Napolitana" >Napolitana</option>
          <option value="New York" >New York</option>
          <option value="Deep Dish" >Deep Dish</option>
        </select>
        <br /><br />

        <label htmlFor="doughballs">Doughballs:</label>
        <input 
          name="doughballs" 
          type="number" 
          min="1" max="1000" step="1" 
          value={weight[0].amount} 
          onChange={(e) => updateWeight(e.target.name, e.target.value)}
        />
        <br />

        <label htmlFor="ballWeight">Ball weight:</label>
        <input 
          name="ballWeight" 
          type="number" min="1" max="1000" step="1" 
          value={weight[1].amount} 
          onChange={(e) => updateWeight(e.target.name, e.target.value)}
        />
  
        <br /><br />

        {/* later issue: map trough this instead */}
        <label htmlFor="water">Water:</label>
        <input 
          name="water" 
          type="number" 
          min="0" max="100" step=".5" 
          value={ingredients[0].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)}
        />%
        <br />

        <label htmlFor="salt">Salt:</label>
        <input 
          name="salt" 
          type="number" 
          min="0" max="100" step=".5" 
          value={ingredients[1].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)} 
        />%
        <br />

        <label htmlFor="sugar">Sugar:</label>
        <input 
          name="sugar" 
          type="number" 
          min="0" max="100" step=".5" 
          value={ingredients[2].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)}
        />%
        <br />

        <label htmlFor="oil">Oil:</label>
        <input 
          name="oil" 
          type="number" 
          min="0" max="100" step=".5" 
          value={ingredients[3].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)} 
        />%
        <br />

      </form>
    </section>
  )
}

export default Calculate;