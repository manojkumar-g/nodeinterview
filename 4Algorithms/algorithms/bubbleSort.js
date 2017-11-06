/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  //  complete the function
  let n = input.length
  for(let i =0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
      if(input[j]>input[j+1]){
        let temp = input[j];
        input[j] = input[j+1];
        input[j+1] = temp;
      }
    }
  }
  return input;
};
