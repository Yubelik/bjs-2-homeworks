"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let diskrim = b ** 2 -(4 * a * c);
  let resZero;
  // console.log("diskrim - " + diskrim);
  if (diskrim < 0){
    return arr;
  } else if (diskrim == 0){

    arr.push(-b/(2*a));
    // console.log("diskrim=0 - " + (-b/(2*a)));
    return arr;

  } else if (diskrim > 0){
    arr.push((-b + Math.sqrt(diskrim))/(2*a));
    arr.push((-b - Math.sqrt(diskrim))/(2*a));
    return arr;
  } 
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let test;
  let price;
  let body;
  let totalCost;
  

  if (isFinite(percent)){
    if (isFinite(contribution)){
      if (isFinite(amount)){
        if (isFinite(countMonths)){
          percent = percent/100/12;
            
          body = amount - contribution;
          test =  (percent + (percent / (((1 + percent)**countMonths) - 1)));
          price =  body * test;
            
          totalCost =  price * countMonths;

          totalCost = parseFloat(totalCost.toFixed(2));
          return totalCost;

        } else return false;//"countMonths - не число";
      } else return false;//"amount - не число";
    } else return false;//"contribution - не число";
  } else return false;//"percent - не число";

}

console.log("Ответ - " + calculateTotalMortgage(10, 0, 50000, 12));

