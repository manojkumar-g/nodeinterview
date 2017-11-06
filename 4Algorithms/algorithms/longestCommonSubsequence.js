/*
  A JavaScript module which resolves the longest common subsequence inside two input strings.  If there is  a subsequence, the longest one is returned.  If there is no common subsequence, -1 is returned.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Longest Common Subsequence - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_subsequence#JavaScript.
*/
module.exports = exports = function(s1, s2) {
  //  complete the function
  let Solution = [];
  for(let i=0;i<=s1.length+1;i++){
    for(let j=0;j<=s2.length+1;j++){
      if(i==0 || j==0)
        Solution[i][j] = 0;
      else if(Solution[i-1] == Solution[j-1])
        Solution[i][j] = Solution[i-1][j-1] + 1
      else
        Solution[i][j] = Solution[i-1][j] > Solution[i][j-1] ? Solution[i-1][j] : Solution[i][j-1]
    }
  }
  return Solution[s1.length][s2.length] && -1;
};
