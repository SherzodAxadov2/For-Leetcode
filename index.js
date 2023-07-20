// let areDeeplyEqual = function(o1, o2) {
//     console.log(JSON.stringify(o1)===JSON.stringify(o2));
//     console.log(json);
// };

// areDeeplyEqual({"y":2,"x":1},{"x":1,"y":2})

// class Bike {
//   constructor(color, model) {
//     (this.color = color), (this.model = model);
//   }

//   getDetails() {
//     return this.model + " bike has " + this.color + " color";
//   }
// }

// const newBike = new Bike("yellow", "bmw");
// console.log(newBike.getDetails());

// let number = new BigInt(121);
// console.log(number);

// console.log(funcNum(10));

// const funcNum = (num) => {
//   let s = 0;
//   for (let i = 1; i <= num; i++) {
//     s += i;
//   }
//   return s/num;
// };
// console.log(funcNum(5));

// const isPalindrome = (num) => {
//   let numArr = String(num);

//   return numArr === numArr.split("").reverse().join("");
// };

// console.log(isPalindrome(1212));

// var createCounter = function (init) {
//   let count = init;
//   return {
//     increament: function () {
//       count++;
//       return count;
//     },
//     reset: function () {
//       count = init;
//       return count;
//     },
//     decrement: function () {
//       count--;
//       return count;
//     },
//   };
// };

// let counter = createCounter(5);

// console.log(counter.increament());
// console.log(counter.reset());
// console.log(counter.decrement());

// var map = function (arr, fn) {
//   var result = [];
//   arr.forEach((el,i) => {
//     result.push(fn(arr[i], i));
//   });
//   return result;
// };

// console.log(
//   map([1, 2, 3], function plusone(n) {
//     return n + 1;
//   })
// );

// var filter = function (arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(
//   filter([0, 10, 20, 30], function greaterThan10(n) {
//     return n > 10;
//   })
// );

// var reduce = function (nums, fn, init) {
//   let sum = init;
//   for (let i = 0; i < nums.length; i++) {
//     sum = fn(sum, nums[i]);
//   }

//   return sum;
// };

// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr;
//     },
//     0
//   )
// );

// var compose = function (functions) {
//   return function (x) {
//     for (var i = functions.length - 1; i >= 0; i--) {
//       x = functions[i](x);
//     }
//     return x
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);

// console.log(fn(4));

// var argumentsLength = function (...args) {
//   return args.length;
// };

// console.log((argsArr = [{}, null, "3"]));

// function memoize(fn) {
//   let result = [];
//   return function (...args) {
//     if (result.includes(args)) {
//       return result.push(fn(args));
//     }
//   };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
// console.log(callCount); // 1

// let a;

// console.log(undefined ?? null ?? a);

// function oddiy(a, a) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// const oddiyArrow = (_) => console.log("it is arrow");

// oddiy(1, 2);
// oddiyArrow();

// Add Two Promises
// const promise = new Promise((resolve, reject) => {
//   a = 2 + 3;
//   a === 5 ? resolve("success") : reject("failure");
// });
// promise.then(console.log);

// var addTwoPromises = async function (promise1, promise2) {
//   return new Promise((resolve, reject) => {
//     try {
//       const [result1, result2] = Promise.all([promise1, promise2]);
//       let sum = result1 + result2;
//       resolve(sum);
//     } catch (err) {
//       reject(err);
//     }
//     Promise.all([promise1, promise2])
//       .then(([res1, res2]) => {
//         let sum = res1 + res2;
//         resolve(sum);
//       })
//       .catch((err) => reject(err));
//   });
// };

// console.log(
//   addTwoPromises(
//     new Promise((resolve) => setTimeout(() => resolve(2), 20)),
//     new Promise((resolve) => setTimeout(() => resolve(5), 60))
//   ).then(console.log)
// );

// 2621. SLeep
// async function sleep(millis) {
//     return new Promise((resolve, reject) =>{
//       try {
//         setTimeout(() => {
//           resolve()
//         }, millis);
//       } catch (error) {
//         reject(error)
//       }
//     })
// }

// let t = Date.now()
// sleep(1000).then(() => console.log(Date.now() - t))

// 2715. Execute Cancellable Function With Delay
// var cancellable = function(fn, args, t) {

// };

// async function f() {
//   let promise = 2 + 5;
//   let result = await promise; // Syntax error
//   return result;
// }

// console.log(f());

// console.log(String.raw(`Hello\nWorld`));

// const regex = String.raw(`'+'\d{3} (\d{2}) \d{3}-\d{2}-\d{2}`)

// const phoneNumber = '+998 (94) 122-90-05'
// console.log(regex.test(phoneNumber));
// console.log('walwkemflawm');

// const regex = String.raw`\d{3}-\d{3}-\d{4}`;

// const phoneNumber = '123-456-7890';
// console.log(regex.test(phoneNumber)); // true

// async function getData(){
//     return await Promise.resolve('Returns data for phone number')
// }

// const data = getData()
// data.then((res)=>console.log(res))

// function addToList(item, list){
//     console.log(list.push(item));
//     return list.push(item);
// }

// const result = addToList('apple', ['banana'])
// console.log(result);

// console.log(typeof 9007199254740991); // 9007199254740992
// console.log(typeof 9007199254740991);

// Rotate an array
// var rotate = function (nums, k) {
//   let n = k % nums.length;
//   nums.unshift(...nums.splice(nums.length - n));

//   return nums;
// };
// console.log(rotate([1, 2, 3], 4));

// 28. Find the Index of the First Occurrence in a String
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };

// console.log(strStr('leetcode', 'leeto'));

// var mergeTwoLists = function (list1, list2) {
//   let newArr = list1.concat(list2);
//   return newArr.sort((a, b) => a - b);
// };

// console.log(mergeTwoLists([1, 3, 4], [1, 2, 3, 5]));

// var maxProfit = function (prices) {
//   let maxDiff = prices[1] - prices[0];
//   let minNum = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     const num = prices[i];

//     if (num - minNum > maxDiff) {
//       maxDiff = num - minNum;
//     }

//     if (num < minNum) {
//       minNum = num;
//     }
//   }

//   return maxDiff < 0 ? 0 : maxDiff;
// };

// console.log(maxProfit([2, 4, 1]));

// var lengthOfLastWord = function (s) {
//   return s.trim().split(' ').at(-1)
// };

// console.log(lengthOfLastWord("   Hello  World   "));

// var removeElement = function (nums, val) {
//   // let newArray = nums.filter((el) => el !== val);
//   // let count = nums.length - newArray.length;
//   // return newArray.concat(new Array(count).fill("_"));

//   return nums.sort((a,b)=>a-b)
// };

// var removeElement = function (nums, val) {
//   return nums.filter((el) => el !== val).length;
// };

// function removeElement(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// console.log(removeElement([3, 2, 2, 3], 3));

// var removeDuplicates = function (nums) {
//   let k = 0;
//   let newArr  = [];

//   for (let i = 0; i < nums.length; i++) {
//     console.log(newArr.indexOf(nums[i]))
//     // if(newArr.indexOf(nums[i])){}
//     // if (nums[i] !== val) {
//     //   nums[k] = nums[i];
//     //   k++;
//     // }
//   }

//   return newArr;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var majorityElement = function (nums) {
  let newArr = Array.from(new Set(nums));

  let n = 0;
  let k;

  newArr.forEach((el) => {
    if (n < nums.filter((i) => i === el).length) {
      n = nums.filter((i) => i === el).length;
      k = el
    }
  });

  return k;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
