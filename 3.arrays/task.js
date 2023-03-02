function compareArrays(arr1, arr2) {
  let rez = arr1.every(function(element,index){
    return (arr1.length === arr2.length && element===arr2[index]);
  });
  return rez;
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length==0 || (users.findIndex(rez => rez.gender == gender)<0)){
    return 0;
  } else {
    let result = users.filter(rez => rez.gender == gender ).reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / users.filter(rez => rez.gender == gender).length
    return result;
    }
}




