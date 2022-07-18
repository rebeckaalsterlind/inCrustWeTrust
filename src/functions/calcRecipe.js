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

// export function setType(type) {
//   console.log('type in type', type);
//   let doughballs;
//   let ballWeight;
//   let water;
//   let salt;
//   let sugar;
//   let oil;

//   switch(type) {
//     case "Napolitana":
//       doughballs = 1;
//       ballWeight = 250;
//       water = 63;
//       salt = 2.5;
//       sugar = 0;
//       oil = 0;
//       break;
//     case "New York":
//       doughballs = 1;
//       ballWeight = 220;
//       water = 62;
//       salt = 2.5;
//       sugar = 1;
//       oil = 1;
//       break;
//     case "Deep Dish":
//       doughballs = 1;
//       ballWeight = 600;
//       water = 60;
//       salt = 2.5;
//       sugar = 0;
//       oil = 2;
//       break;
//     default:
//   } 

//   const getType = {
//     weight:
//       [
//         {name: "doughballs", amount: doughballs},
//         {name: "ballWeight", amount: ballWeight}
//       ],
//     ingredients:
//     [
//       {name: "water", amount: water},
//       {name: "salt", amount: salt}, 
//       {name: "sugar", amount: sugar}, 
//       {name: "oil", amount: oil}
//     ]
//   };
  
//   return getType;
// }