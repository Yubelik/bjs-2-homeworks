"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let res = b ** 2 -(4 * a * c);
  let resZero;
  // console.log(res);
  if (res < 0){
    return arr;
  } else if (res = 0){
    arr.push(-b/(2*a));
    // console.log(resZero);
    return arr;
  } else if (res > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
    return arr;
  } 
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  

}

console.log(solveEquation(1, 5, 4));
