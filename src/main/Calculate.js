import React, { useState, useEffect } from 'react';
import './calculate.css';


function Calculate({getWeight, getRecipe, getTotal}) {
  
  const initialWeight =  [
    {name: "doughballs", amount: 1},
    {name: "ballWeight", amount: 250}
  ];

  const initialRecipe =  [
    {name: "flour", amount: Number(250)},
    {name: "water", amount: Number(60)},
    {name: "salt", amount: 60}, 
    {name: "sugar", amount: 2.5}, 
    {name: "oil", amount: 60}
  ];
  
  const [type, setType] = useState("napolitana");
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

  //   //setting new recipe
    const newIngredients = [
      {name: "flour", amount: ingredients[0].amount},
      {name: "water", amount: ingredients[1].amount},
      {name: "salt", amount: ingredients[2].amount}, 
      {name: "sugar", amount: ingredients[3].amount}, 
      {name: "oil", amount: ingredients[4].amount},
    ];
console.log('newInte', newIngredients);
    //sum all ingredients for total % apart from flour
    let remaining = 0;

    newIngredients.forEach(i => {
      if(i.name !== "flour") {
        remaining += Number(i.amount);
        i.amount = i.amount/100; 
      }
 
    });

    //calc amount on flour
    let flour = (totalWeight * 100) / (100 + remaining);

    //calc amount of each ingredient based on flour
    newIngredients.forEach(i => {
      if(i.name !== "flour"){
        i.amount = i.amount * flour;
      }
    });
    
    //update flour in arr
    const index = newIngredients.findIndex((i) => i.name === "flour");
    newIngredients[index] = {name: "flour", amount: Number(flour)};

   
    //set new ingredients state
    getRecipe(newIngredients);
    getWeight(weight);
    getTotal(totalWeight);
  };

  // //presets based on style
  // useEffect(() => {
    
  //   switch(type) {
  //     case "Napolitana":
  //       setBallWeight(250);
  //       setWater(63);
  //       setSugar(1);
  //       setOil(0);
  //       setSalt(2.5);
  //       break;
  //     case "New York":
  //       setBallWeight(220);
  //       setWater(62);
  //       setSugar(1);
  //       setOil(1);
  //       setSalt(2.5);
  //       break;
  //     case "Deep Dish":
  //       setBallWeight(600);
  //       setWater(60);
  //       setSugar(0);
  //       setOil(2);
  //       setSalt(2.5);
  //     break;
  //     default:
  //   } 
  // }, [type])

  // useEffect(() => {
  //   //if old state is not the same - run recipe()
  //   calculate(ingredients);
  // }, )

  // useEffect(() => {
  //   calculate(ingredients);
  // }, ingredients)


  // function handleSubmit (e) {
  //   e.preventDefault();
  //  recipe();
  //  console.log('calculta', calculate);
  //   calculate(ingredients);
  // }


  return (

    <section className="set-recipe">
      <form>
        <label htmlFor="type"> Type of pizza</label>
        <br />
        <select name="type" >
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
          value={ingredients[1].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)}
        />%
        <br />

        <label htmlFor="salt">Salt:</label>
        <input 
          name="salt" 
          type="number" 
          min="0" max="100" step=".5" 
          value={ingredients[2].amount} 
          onChange={(e) => updateIngredients(e.target.name, e.target.value)} 
        />%
        <br />

        <label htmlFor="sugar">Sugar:</label>
        <input name="sugar" type="number" min="0" max="100" step=".5" value={ingredients[3].amount} onChange={(e) => updateIngredients(e.target.name, e.target.value)}/>%
        <br />

        <label htmlFor="oil">Oil:</label>
        <input name="oil" type="number" min="0" max="100" step=".5" value={ingredients[4].amount} onChange={(e) => updateIngredients(e.target.name, e.target.value)} />%
        <br />

      </form>
    </section>
  )
}

export default Calculate;