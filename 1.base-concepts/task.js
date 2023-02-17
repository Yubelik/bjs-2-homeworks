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
  
  if (!isNaN(percent)){
    if (!isNaN(contribution)){
      if (!isNaN(amount)){
        if (!isNaN(countMonths)){
          
          let percent12 = percent/100/12;
          // percent = percent/12;
            
          body = amount - contribution;
          test =  (percent12 + (percent12 / (((1 + percent12)^countMonths) - 1)));
          price =  body * test;
            
          totalCost =  price * countMonths;
            

          totalCost = Math.round(totalCost, -2);
          return totalCost;

        } else return "countMonths - не число";
      } else return "amount - не число";
    } else return "contribution - не число";
  } else return "percent - не число";

}

console.log("Ответ - " + calculateTotalMortgage(10, 0, 50000, 12));

