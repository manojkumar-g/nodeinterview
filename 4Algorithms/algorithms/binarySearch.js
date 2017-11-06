/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found -1 is returned.
*/
module.exports = exports = function(input, value) {
  var bottom = 0, top = input.length - 1, index = null;
  let l = 0;
  let r = input.length-1;
  while(l<r){
    let mid = l+r/2;

    if(input[mid] == value)
      return mid;
    if(value < input[mid]){
      r = mid-1
    }
    else{
      l = mid+1
    }
  }
  return -1;
//  complete the function
};
