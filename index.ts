// function gcdOfStrings(str1: string, str2: string): string {
//   if (str1 + str2 !== str2 + str1) {
//     return "";
//   } else if (str1 === str2) {
//     return str2;
//   } else {
//     if (str1.length > str2.length) return str2;
//     else return str1;
//   }
// }

// console.log(gcdOfStrings("ABCABC", "ABC"));

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   let max = Math.max(...candies);
//   let arr:boolean[] = [];

//   candies.forEach((el,i) => {
//     if (el + extraCandies >= max) {
//         arr.push(true);
//     } else arr.push(false)
//   });

//   return arr;
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] == 0 &&
//       (i == 0 || flowerbed[i - 1] == 0) &&
//       (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
//     ) {
//       flowerbed[i] = 1;
//       n--;
//     }
//   }
//   return n > 0 ? false : true;
// }

// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));

// Reverse Vowels of a String

// function reverseVowels(s: string): string {
//   let vowels: string[] = ["a", "e", "i", "o", "u"];
//   let stringVowels: string[] = [];
//   let arr: string[] = s.split("");
//   arr.forEach((el: string, i) => {
//     if (vowels.includes(el.toLocaleLowerCase())) {
//       arr[i] = "null";
//       stringVowels.unshift(el);
//     }
//   });
//   arr.forEach((el: string, i: number) => {
//     if (el === "null") {
//       arr[i] = `${stringVowels.splice(0, 1)}`;
//     }
//   });

//   return arr.join('');
// }

// console.log(reverseVowels("leEtcode"));

// Reverse Words in a String
// function reverseWords(s: string): string {
//   console.log(s.trim().replace(/\s+/i, " "));

//   return s.trim().replace(/\s+/g, " ").split(' ').reverse().join(" ");
// }

// console.log(reverseWords("  hello  world  "));

// Increasing Triplet Subsequence
// function increasingTriplet(nums: number[]): boolean {
//   let boolean: boolean = false;
//   for (let i = 0; i < nums.length-2; i++) {
//     if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
//       boolean = true;
//       break
//     }
//   }

//   return boolean;
// }

// console.log(increasingTriplet([5, 4, 3, 4, 5]));

// Move Zeroes
// function moveZeroes(nums: number[]): void {
//   let count: number = 0;
//   for (let i: number = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   for (let i: number = 0; i < count; i++) {
//     nums.push(0);
//   }
// }

// function moveZeroes(nums: number[]): void {
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       const x: number = nums[j]; //0
//       nums[j] = nums[i]; //2
//       nums[i] = x; //0
//       j++;
//       console.log(i, j);
//       console.log(nums);
//     }
//   }
// }

// moveZeroes([0, 0, 1]);

// Max Number of K-Sum Pairs
// function maxOperations(nums: number[], k: number): number {
//   let set: Set<number> = new Set();
//   let pairs: number[][] = [];

//   for (let i: number = 0; i < nums.length; i++) {
//     const complement = k - nums[i];

//     if (set.has(complement)) {
//       pairs.push([nums[i], complement]);
//       set.delete(nums[i])
//     }
//     set.add(nums[i]);
//     console.log(set);
//   }

//   return pairs.length;
// }
// // 3 1
// console.log(maxOperations([3, 1, 3, 4, 3], 6));

// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }

// console.log('User response: ', UserResponse.No);

// let salary;
// salary = 12000;
// salary = '12000';
// salary = true;

// const Arr: (number | string)[] = [234, "fsadsfas", 23452345]; // union types

// let literalTypes: "Uzbekistan" | "Russia" | "Turkmanistan" | "Tajikistan"; //literal types

// literalTypes = "Uzbekistan";

// enum Job {
//   "Teacher",
//   "Fireman",
//   "Doctor",
// }

// const myJob = Job.Teacher;

// console.log(myJob);

// type title = string | number; //type aliases

// let nameOfPerson: title = 2345;

// const link = document.querySelector("a")!;

// console.log(link);
