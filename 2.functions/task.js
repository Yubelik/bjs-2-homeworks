function getArrayParams(...arr) {
  let min, max, avg;
  let sum = 0;
    min = Infinity;
    max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i] ) {
            max = arr[i];
        }
        if (min > arr[i] ) {
            min = arr[i];
        }
            sum += arr[i];     
    };

    avg = sum / arr.length;
    avg = parseFloat((Math.round(avg * 100) / 100).toFixed(2));
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
  let maxWorkerResult = -Infinity;
  for (let index = 0; index < arrOfArr.length; index++) {
    let element = arrOfArr[index];
      for (let i = 0; i < element.length; i++) {
        let element2 = element[i];
      }
      maxWorkerResult1 = func(...element)
      if (maxWorkerResult <  maxWorkerResult1) {
        maxWorkerResult =  maxWorkerResult1;
    }
  }
  return maxWorkerResult;
}

  