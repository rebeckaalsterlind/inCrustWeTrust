import './main.css';
import DoughCalculator from './DoughCalculator';
import PizzaRecipes from './PizzaRecipes';

function Main({page}) {

  return (
    <main>
      {page === "calculator" 
        ? 
        <DoughCalculator />
        :
        <PizzaRecipes />
      }
    </main>
  )
}

export default Main;