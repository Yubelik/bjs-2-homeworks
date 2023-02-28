function compareArrays(arr1, arr2) {
  let rez = arr1.every(function(element,index){
    return (arr1.length === arr2.length && element===arr2[index]);
  });
  return rez;
}

function getUsersNamesInAgeRange(users, gender) {
  if (Array.isArray(users) && users.length>0 && (users.findIndex(rez => rez.gender == gender)>-1)){
    let result = users.filter(rez => rez.gender == gender ).reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / users.filter(rez => rez.gender == gender).length
    return result;
  } else return 0;
}



const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];


  getUsersNamesInAgeRange(people, "мужской");
