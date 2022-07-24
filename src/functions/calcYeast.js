
//Napoletana
export default function calcYeast(yeast) {

  let proofTemp = yeast[2].value;
  const proofTime = yeast[4].value;
  const flour = yeast[0].value;
  const yeastType = yeast[1].value;  

  //if option is fahrenheit => translate to celcius
  if(yeast[3].value === "f") proofTemp = (proofTemp - 32) * 5/9;

  const tempDiff = proofTemp -13; 
  const timeDiff = proofTime -8;

  // //amount of yeast per flour 
  const yeastAmount = flour / (91 + Math.sqrt(flour));

  // //yeast temp needed
  const yeastTemp = yeastAmount * Math.pow(0.81, tempDiff);

  //yeast time needed (instant):
  let yeastTime = yeastTemp * Math.pow(0.899, timeDiff);
  //active yeast
  if(yeastType === "ADY") yeastTime *= 1.25 
  //fresh yeast 
  else if(yeastType === "CY") yeastTime *= 3 
  

  return yeastTime; 

}


