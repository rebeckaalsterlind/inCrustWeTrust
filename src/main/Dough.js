import React, { useState, useEffect } from 'react';

function Dough() {

  const [showRecipe, setShowRecipe] = useState(false);
  const [type, setType] = useState("Napolitana");
  const [doughballs, setDoughballs] = useState(1);
  const [ballWeight, setBallWeight] = useState(30);
  const [water, setWater] = useState(60);
  const [oil, setOil] = useState(60);
  const [salt, setSalt] = useState(60);

  const [sugar, setSugar] = useState(2.5);
  const [totalWeight, setTotalWeight] = useState(ballWeight * doughballs);

  const [ingredients, setIngredients] = useState([
    {ingredient: "flour", amount: ""}, 
    {ingredient: "water", amount: ""},
    {ingredient: "salt", amount: ""}, 
    {ingredient: "sugar", amount: ""}, 
    {ingredient: "oil", amount: ""}
  ]);

  function recipe() {
    setTotalWeight(ballWeight * doughballs);

    const newIngredients =[
      {ingredient: "flour", amount: totalWeight}, 
      {ingredient: "water", amount: water},
      {ingredient: "salt", amount: salt}, 
      {ingredient: "sugar", amount: sugar}, 
      {ingredient: "oil", amount: oil}
    ];

    newIngredients.forEach(i => {
      i.amount = ((i.amount/100) * totalWeight).toFixed(2)
    });

    setIngredients(newIngredients);
  }

  useEffect(() => {
    recipe()
  }, [ballWeight])
  
  
  useEffect(() => {
    recipe()
  }, [doughballs])


  useEffect(() => {
    
    setShowRecipe(false);

    switch(type) {
      case "Napolitana":
        setSugar(1);
        setOil(0);
        setSalt(2.5);
        break;
      case "New York":
        setSugar(1);
        setOil(1);
        setSalt(2.5);
        break;
      case "Deep Dish":
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
   
  

  }

  useEffect(() => {
    if (ingredients[0].amount <= 0) setShowRecipe(false);
  }, )


  useEffect(() => {
    setShowRecipe(true);
  }, ingredients)

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
        <br />   <br />

        <label htmlFor={doughballs}>Dough balls</label>
        <select name="doughballs" onChange={(e)=> setDoughballs(e.target.value)}>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor={ballWeight}>Ball weight</label>
        <select name="ballweight" onChange={(e) => setBallWeight(e.target.value)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option selected value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <br />
        Total dough weight: {totalWeight}g
        <br /><br />
      
        <label for="water">Water:</label>
        <input name="water" type="number" placeholder={water} min="1" max="100" step=".5" value={water} onChange={(e) => setWater(e.target.value)}/>%
        <br />

        <label for="salt">Salt:</label>
        <input name="salt" type="number" placeholder={salt} min="0" max="100" step=".5" value={salt} onChange={(e) => setSalt(e.target.value)} />%
        <br />

        <label for="oil">Oil:</label>
        <input name="oil" type="number" placeholder={oil} min="0" max="100" step=".5" value={oil} onChange={(e) => setOil(e.target.value)} />%
        <br />

        <label for="sugar">Sugar:</label>
        <input name="sugar" type="number" placeholder={sugar} min="0" max="100" step=".5" value={sugar} onChange={(e) => setSugar(e.target.value)}/>%
        <br />
       
        <button>Calculate</button>
      </form>

      
      <br />   <br />
      {showRecipe && 
        <section style={{border: '1px solid black'}}>
          Recipe for {type} {doughballs}doughballs á {ballWeight}g 
          <ul> 
            {ingredients.map((i, index) => (
              (i.amount > 0 && 
                <li key={index}>{i.ingredient}{i.amount}</li>
              )
            )) }
          </ul>
        </section>
      }
    </>

  )
}

export default Dough;