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

//Q3 Seek and Destroy

// function destroyer(arr) {
//     var newArr = [];
//     for (var i = 1; i < arguments.length; i++) {
//       newArr.push(arguments[i])
//     }
//     return arr.filter(item => !newArr.includes(item))
//   }
  
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Q4 Wherefore art thou

// function whatIsInAName(collection, source) {
//     var srcKeys = Object.keys(source);
//     return collection.filter(function(obj) {
//         for(var i = 0; i < srcKeys.length; i++) {
//             if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     })
// }
  
//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Q5 Spinal Tap Case

// function spinalCase(str) {
//     var regEx = /\s|_/g;
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
//     return str.replace(regEx, "-").toLowerCase();
// }
  
// console.log(spinalCase('This Is Spinal Tap'));