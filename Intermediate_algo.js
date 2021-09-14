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

//Q6 Pig Latin

// function translatePigLatin(str) {
//     var regex = /[aeiou]/g
//     if(str[0].match(regex)) {
//         return str + "way";
//     } else if(str.match(regex) === null) {
//         return str + "ay"
//     } else {
//         var vowelList = str.match(regex);
//         var indexVowel = str.indexOf(vowelList[0]);
//         return str.slice(indexVowel) + str.slice(0, indexVowel) + "ay";
//     }
// }

// console.log(translatePigLatin("glove"));

//Q7 Search & Replace

// function myReplace(str, before, after) {
//     if(before[0] === before[0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1)
//     } else {
//         after = after[0].toLowerCase() + after.slice(1)
//     }
//     return str.replace(before, after);
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//Q8 DNA Pairing

// function pairElement(str) {
//     var newArray = [];
//     for(var i = 0; i < str.length; i++) {
//         switch(str[i]) {
//             case "A":
//                 newArray.push(['A', 'T']);
//             break;
//             case "T":
//                 newArray.push(['T', 'A']);
//             break;
//             case "G":
//                 newArray.push(['G', 'C']);
//             break;
//             case "C":
//                 newArray.push(['C', 'G']);
//             break;
//         }
//     }
//     return newArray;
// }
  
// console.log(pairElement("GCG"));

//Q9 Missing Letters

// function fearNotLetter(str) {
//     for(var i = 0; i < str.length; i++) {
//         if(str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1 && str.length < 26) {
//             return String.fromCharCode(str.charCodeAt(i) + 1);
//         }
//     }
//     return undefined;
// }
  
// console.log(fearNotLetter("abde"));

// Q10 Sorted Union

// function uniteUnique(arr) {
//     var args = [...arguments];
//     var result = [];
//     for (var i = 0; i < args.length; i++) {
//       for (var j = 0; j < args[i].length; j++) {
//         if (!result.includes(args[i][j])) {
//           result.push(args[i][j]);
//         }
//       }
//     }
//     return result;
//   }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Q11 Convert HTML Entities

// function convertHTML(str) {
//     for(var i = 0; i < str.length; i++) {
//         switch (str[i]) {
//             case '&':
//                 str = str.replace("&", "&amp;");
//             break;
//             case "<":
//                 str = str.replace("<", "&lt;");
//             break;
//             case ">":
//                 str = str.replace(">", "&gt;");
//             break;
//             case '"':
//                 str = str.replace('"', "&quot;");
//             break;
//             case "'":
//                 str = str.replace("'", "&apos;");
//             break;
//         }
//     }
//     return str;
// }
  
// console.log(convertHTML("Dolce & Gabbana"));

//Q12 Sum Fibo Number

// function sumFibs(num) {
//     var previousNumber = 0;
//     var currentNumber = 1;
//     var result = 0;
//     while(currentNumber <= num) {
//         if(currentNumber%2 !== 0) {
//             result += currentNumber;
//         }
//         currentNumber += previousNumber;
//         previousNumber = currentNumber - previousNumber;
//     }
//     return result;
// }
  
// console.log(sumFibs(4));

// Q13 Sum All Primes

// function sumPrimes(num) {
//     // Helper function to check primality
//     function isPrime(num) {
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0)
//           return false;
//       }
//       return true;
//     }
  
//     // Check all numbers for primality
//     let sum = 0;
//     for (let i = 2; i <= num; i++) {
//       if (isPrime(i))
//         sum += i;
//     }
//     return sum;
//   }