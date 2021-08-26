/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(A, K) {
  let flag = A.length - 1
  while(K) {
      if(flag < 0) {
          A.unshift(K % 10)
      } else {
          K += A[flag]
          A[flag--] = K % 10
      }
      K = Math.floor(K / 10)
  }
  return A
}

// console.log(addToArrayForm( num = [1,2,0,0], k = 34));
// console.log(addToArrayForm(num = [2,7,4], k = 181));
// console.log(addToArrayForm(num = [2,1,5], k = 806));
console.log(addToArrayForm(num = [9, 9], k = 1));