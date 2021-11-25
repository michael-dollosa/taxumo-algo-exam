function insertionSort(arr) {
  let tempArr = arr
  let shifts = 0
  //iterate array using for loop starting from index 1
  for(let index = 1; index < tempArr.length; index++){
      //traverse to left until index 0
      for(let curr = index-1; curr > -1; curr--){
          let next = curr + 1
          //compare values
          if(tempArr[next] < tempArr[curr]){
              //swap using array destructuring
              [tempArr[next],tempArr[curr]] = [tempArr[curr],tempArr[next]]
              //increment shift
              shifts++
          }
      }
  };
  return shifts;
}