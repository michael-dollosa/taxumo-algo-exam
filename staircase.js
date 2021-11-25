function stairs(n) {
  for(let index = 1; index < n+1; index++){
      //instantiate an Array with whitespaces then concat with Array with #
      console.log(new Array(n-(index-1)).join(" ") + new Array(index+1).join("#"))
  }
}