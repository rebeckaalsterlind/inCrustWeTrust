export default function changeType(type) {
  console.log('type in changeType', type);
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
      sugar = 0;
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

  const newRecipe = {
    weight:
      [
        {name: "doughballs", amount: doughballs},
        {name: "ballWeight", amount: ballWeight}
      ],
    ingredients:
      [
        {name: "water", amount: water},
        {name: "salt", amount: salt}, 
        {name: "sugar", amount: sugar}, 
        {name: "oil", amount: oil}
      ]
  };
  

  return newRecipe;
}