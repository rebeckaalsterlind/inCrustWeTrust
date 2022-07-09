import React, { useState, useEffect } from 'react';
import './dough.css';

function Dough() {

  const [showRecipe, setShowRecipe] = useState(false);
  const [type, setType] = useState("Napolitana");
  const [doughballs, setDoughballs] = useState(1);
  const [ballWeight, setBallWeight] = useState(250);
  const [water, setWater] = useState(60);
  const [oil, setOil] = useState(60);
  const [salt, setSalt] = useState(60);
  const [sugar, setSugar] = useState(2.5);
  const [totalWeight, setTotalWeight] = useState(ballWeight * doughballs);
  const [ingredients, setIngredients] = useState([]);

  function recipe() {

    //calc total weight of dough
    setTotalWeight(ballWeight * doughballs);

    //setting new recipe
    const newIngredients =[
      {id: 1, type: "size", name: "doughballs", amount: doughballs},
      {id: 2, type: "size", name: "ballWeight", amount: ballWeight}, 
      {id: 3, type: "ingredient", name: "water", amount: water},
      {id: 4, type: "ingredient", name: "salt", amount: salt}, 
      {id: 5, type: "ingredient", name:  "sugar", amount: sugar}, 
      {id: 6, type: "ingredient", name:  "oil", amount: oil}
    ];

    //sum all ingredients for total % apart from flour
    let otherIng = 0;
    newIngredients.forEach(i => {
      if(i.type === "ingredient") {
        otherIng += Number(i.amount);
        i.amount = i.amount/100;
      }
    });

    //calc amount on flour
    let flour = (totalWeight * 100) / (100 + otherIng);

    //calc amount of each ingredient based on flour
    newIngredients.forEach(i => {
      if(i.type === "ingredient") i.amount = i.amount * flour;
    });
 
    //push flour into array
    newIngredients.push({id: 7, type: "ingredient", name:  "flour", amount: flour})

    //set new ingredients state
    setIngredients(newIngredients);


  }

  // useEffect(() => {
  //   recipe()
  // }, [ballWeight])
  
  
  // useEffect(() => {
  //   recipe()
  // }, [doughballs])


  useEffect(() => {
    
    setShowRecipe(false);

    switch(type) {
      case "Napolitana":
        setBallWeight(250);
        setWater(63);
        setSugar(1);
        setOil(0);
        setSalt(2.5);
        break;
      case "New York":
        setBallWeight(220);
        setWater(62);
        setSugar(1);
        setOil(1);
        setSalt(2.5);
        break;
      case "Deep Dish":
        setBallWeight(600);
        setWater(60);
        setSugar(0);
        setOil(2);
        setSalt(2.5);
      break;
      default:
     } 
  }, [type])

  function handleSubmit (e) {
    e.preventDefault();
    
    recipe();
    setShowRecipe(true);

  }

  // useEffect(() => {
  //   if (ingredients[0].amount <= 0) setShowRecipe(false);
  // }, )


  // useEffect(() => {
  //   setShowRecipe(true);
  // }, [ingredients])

  return (
    <>
      <form onSubmit={handleSubmit}>
         <label htmlFor="type"> Type of pizza</label>
        <br />
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option value="Napolitana" >Napolitana</option>
          <option value="New York" >New York</option>
          <option value="Deep Dish" >Deep Dish</option>
        </select>
        <br /><br />

        <label htmlFor="doughballs">Doughballs:</label>
        <input name="doughballs" type="number" id={1} placeholder={doughballs} min="1" max="1000" step="1" value={doughballs} onChange={(e) => setDoughballs(e.target.value)}/>
        <br />


        <label htmlFor="ballWeight">Ball weight:</label>
        <input name="ballWeight" type="number" placeholder={ballWeight} min="1" max="1000" step="1" value={ballWeight} onChange={(e) => setBallWeight(e.target.value)}/>
        <br />

        <br />
        Total dough weight: {totalWeight}g
        <br /><br />
      
        <label htmlFor="water">Water:</label>
        <input name="water" type="number" placeholder={water} min="0" max="100" step=".5" value={water} onChange={(e) => setWater(e.target.value)}/>%
        <br />

        <label htmlFor="salt">Salt:</label>
        <input name="salt" type="number" placeholder={salt} min="0" max="100" step=".5" value={salt} onChange={(e) => setSalt(e.target.value)} />%
        <br />

        <label htmlFor="oil">Oil:</label>
        <input name="oil" type="number" placeholder={oil} min="0" max="100" step=".5" value={oil} onChange={(e) => setOil(e.target.value)} />%
        <br />

        <label htmlFor="sugar">Sugar:</label>
        <input name="sugar" type="number" placeholder={sugar} min="0" max="100" step=".5" value={sugar} onChange={(e) => setSugar(e.target.value)}/>%
        <br />
       
        <button>Calculate</button>
      </form>

      
      <br />   <br />
      {showRecipe && 
        <section>
          <ul> 
            {ingredients.map((i) => (
              i.amount > 0 && 
                <li key={i.id}>{i.name}: {Math.round(i.amount*10)/10}g</li>
            ))}
          </ul>
        </section>
      }
    </>

  )
}

export default Dough;