function compareArrays(arr1, arr2) {
  let rez = arr1.every(function(element,index){
    return (arr1.length === arr2.length && element===arr2[index]);
  });
  return rez;
}

function getUsersNamesInAgeRange(users, gender) {
  
}


