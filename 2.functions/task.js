function getArrayParams(...arr) {
 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
 
  let rezult = arr.reduce((summ, currentValue) => summ + currentValue,0);
  return rezult;
}

function differenceMaxMinWorker(...arr) {
  if (Array.isArray(arr) && arr.length){
      let max = Math.max(...arr);
      let min = Math.min(...arr);
      a = max-min;
      return (a);
  } else {
      return 0;
    }
  }

function differenceEvenOddWorker(...arr) {

    if (Array.isArray(arr) && arr.length){
        let sumEvenElement = 0;
        let sumOddElement = 0;
        for (let index = 0; index < arr.length; index++) {
          let element = arr[index];
            if(element % 2 == 0) {
              sumEvenElement = sumEvenElement + arr[index];
            } else {
              sumOddElement = sumOddElement + arr[index];
            } 
        }
        rezult = sumEvenElement - sumOddElement;
    // console.log("sumEvenElement = "+sumEvenElement+ " sumOddElement = "+sumOddElement + " test = "+rezult);
    return (rezult);
    } else {
        return 0;
    }
}
// differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (Array.isArray(arr) && arr.length){
    let sumEvenElement = 0;
    let sumEvenElementCount = 0;

    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
        if(element % 2 == 0) {
          sumEvenElement = sumEvenElement + arr[index];
          sumEvenElementCount++;
        } 
    }
    sumEvenElement = sumEvenElement / sumEvenElementCount;
  return (sumEvenElement);
  } else {
      return 0;
  }

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult;
}


