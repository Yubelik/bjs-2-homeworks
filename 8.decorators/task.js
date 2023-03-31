//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

  function wrapper(...args) {     
      const hash = md5(args);
      let objectInCache = cache.find((item) => item.hash == hash ); 
      if (objectInCache) { 
          return "Из кэша: " + objectInCache.value;
      }   
      let result = func(...args); 
      let resultObj = {
        hash: hash, 
        value: result 
      };
      cache.push(resultObj) ; 
    
      if (cache.length > 5) { 
        cache.shift();  
      }
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


    
//Задача № 2
function debounceDecoratorNew(func, delay) {
  wrapper.count=0;
  wrapper.allCount=0;
  let timeoutID = null;
  function wrapper(...args){
    wrapper.allCount++;
       if (!timeoutID){
        func(...args);
        wrapper.count++;
        // return;
      }
      
      
      clearTimeout(timeoutID);
      
      timeoutID = setTimeout(() => {
        func(...args);
        wrapper.count++;
        }, delay);
      //  wrapper.count++;
      // return result;
    }
    return wrapper;
}

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log("было выполнено 3 = "+upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log("было выполнено 6 = "+upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)






