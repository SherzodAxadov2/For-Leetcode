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

function reverseVowels(s: string): string {
  let arr: string[] = s.split("");
  arr.forEach((el: string) => {});
  console.log(arr);
  return "";
}

console.log(reverseVowels("leetcode"));
