//Q1 Sum All Numbers In A Range

// function sumAll(arr) {
//     var maxNumber = Math.max(arr[0], arr[1]);
//     var minNumber = Math.min(arr[0], arr[1]);
//     var sumNum = 0;

//     for(var i = minNumber; i <= maxNumber; i++) {
//         sumNum += i;
//     }
//     return sumNum;
// }
  
// console.log(sumAll([1, 4]));

//Q2 Diff Two Arrays

// function diffArray(arr1, arr2) {
//     return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element))
// };
  
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));