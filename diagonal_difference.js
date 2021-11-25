function diagonalDifference(arr) {
  let leftDiagonal = 0
  let rightDiagonal = 0
  //Since we just need to add diagonals, max iteration will be equals to arr length
  for(let right = 0, left = arr.length-1; right < arr.length; right++, left--){
      leftDiagonal += arr[right][left]
      rightDiagonal += arr[right][right]
  }
  return Math.abs(rightDiagonal - leftDiagonal)
}