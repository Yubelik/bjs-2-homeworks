//Задача № 1
function cachingDecoratorNew(func) {
    let cache = {};

  function wrapper(...args) {     
      const hash = md5(args);//func(...args)//md5(args); // получаем правильный хеш c помощью функции md5
      let objectInCache = cache.find((item) => item.hash == hash ); // ищем элемент, хеш которого равен нашему хешуs
    
      if (objectInCache && objectInCache !== undefined) { // если элемент найден
          console.log("Из кэша: " + objectInCache); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          
          return "Из кэша: " + cache[objectInCache];
      }

    console.log("Вычисляем значение хеша");   
      
      let result = func(...args); // в кеше результата нет — придётся считать
      
      cache.push({hash:result}) ; // добавляем элемент с правильной структурой
      
      if (cache.length > 5) { 
        cache.shift();  // если слишком много элементов в кеше, надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кэша: 9

    
// //Задача № 2
// function debounceDecoratorNew(func, delay) {
//   wrapper.count=0;
//   wrapper.allCount=0;
//   let timeoutID = null;
//     function wrapper(...args){
//       wrapper.count++;
//         if (timeoutID=null){
//             wrapper.allCount++;
//             clearTimeout(timeoutID);
//         }
//         timeoutID = setTimeout(() => {
//             wrapper.count++;
//             func(...args)}, delay);
//     }
    
    
//     return wrapper;
// }





