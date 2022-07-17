
import './recipe.css';

function Recipe({weight, ingredients, total}) {
  
  return (
    <section>
      <ul>
        {weight.length !== 0 && weight.map((i, index) => (
          i.amount > 0 && 
            <li key={index}>{i.name.charAt(0).toUpperCase() + i.name.slice(1)}: {Math.round(i.amount*10)/10}g</li>
        ))} 
       {total && <p>Total weight: {total}</p>}
        <br />
        {ingredients.length !== 0 && ingredients.map((i, index) => (
          i.amount > 0 && 
            <li key={index}>{i.name.charAt(0).toUpperCase() + i.name.slice(1)}: {Math.round(i.amount*10)/10}g</li>
        ))}
      </ul>
    </section>

  )
}

export default Recipe;