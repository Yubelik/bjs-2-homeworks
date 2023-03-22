//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

  function wrapper(...args) {
    // debugger;
           
      const hash = md5(args); // получаем правильный хеш c помощью функции md5
      let objectInCache = cache.find((item) => item == hash ); // ищем элемент, хеш которого равен нашему хешуs
      
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + objectInCache); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache;
      }

    console.log("Вычисляем значение хеша");   
      let result = md5(args) //func(...args); // в кеше результата нет — придётся считать
      cache.push(result) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift();  // если слишком много элементов в кеше, надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}



    // //const objectInCache = cache.find((item) => тут нужно подумать)`
    // if (!objectInCache){
    //     //Это можно сделать методом shift() массива
    // }


//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}


// const hasingText = "какой-нибудь текст";
    // console.log(md5(hasingText)); // 8d1d3ecc455a4220590e6d27e6c1a267
    // console.log(md5([10, 20, 30])); // 7f49b84d0bbc38e96493718013baace6



