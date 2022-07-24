export default function calcRecipe(ingredients, totalWeight) {

  //temp recipe
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

  //push flour into arr
  newIngredients.unshift({name: "flour", amount: Number(flour)});
 
  return newIngredients;

};
