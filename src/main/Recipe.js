
import './recipe.css';

function Recipe({weight, ingredients, total}) {
  
  return (
    <section className="recipe">
      <h3>Recipe</h3>
      <ul>
        {weight.length !== 0 && weight.map((i, index) => (
          i.amount > 0 && 
            <li key={index}>{i.name.charAt(0).toUpperCase() + i.name.slice(1)}: {Math.round(i.amount*10)/10}
            {i.name !== "doughballs" && "g"}</li>
        ))} 
       {total && <p>Total weight: {total}g</p>}
        <br />
        {ingredients.length !== 0 && ingredients.map((i, index) => (
          i.amount > 0 && 
            <li key={index}>
              {i.name.charAt(0).toUpperCase() + i.name.slice(1)}:&nbsp;
              {i.name === "flour"|| i.name === "water" 
              ?  Math.floor(i.amount) 
              : Math.round(i.amount*10)/10}g
            </li>
        ))}
      </ul>
    </section>

  )
}

export default Recipe;