//  Find the second highest number in an array without sorting it.
console.log(
  "--------Find the Second highest number in an array without sorting it:--------"
);
let arr = [10, 5, 20, 8, 15];
let highest = -Infinity;
let secondHighest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest) {
    secondHighest = highest;
    highest = arr[i];
  } else if (arr[i] > secondHighest && arr[i] < highest) {
    secondHighest = arr[i];
  }
}
console.log("Second highest number:", secondHighest);

// Character frequency counter from a string.
console.log("--------Character frequency counter from a string:--------");
let charStr = "apple";
let charCount = {};
for (let i = 0; i < charStr.length; i++) {
  let char = charStr[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}
console.log("Character frequencies:", charCount);

//Reverse only words in an array of strings.
console.log("--------Reverse only words in an array of strings:--------");

let words = ["hello", "world"];
let reversedWords = words.map((word) => word.split("").reverse().join(""));
console.log("Reversed words:", reversedWords);

// Check even or odd using map.
console.log("--------Check even or odd using map:--------");
let numbers = [1, 2, 3, 4];
let evenOdd = numbers.map((num) => (num % 2 === 0 ? "Even" : "Odd"));
console.log("Even or Odd:", evenOdd);

//  Flatten a nested array (1 level deep).
console.log("--------Flatten a nested array (1 level deep):--------");
let nestedArray = [1, 2, [3, 4], 5];
let flattenedArray = nestedArray.flat();
console.log("Flattened array:", flattenedArray);

//  Print all prime numbers between 10 and 50.
console.log("--------Print all prime numbers between 10 and 50:--------");
for (let num = 10; num <= 50; num++) {
  let isPrime = true;
  if (num < 2) isPrime = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

// Filter names that start with vowels.
console.log("--------Filter names that start with vowels:--------");

let names = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
let vowelNames = names.filter((name) => /^[aeiouAEIOU]/.test(name));
console.log("Names starting with vowels:", vowelNames);

//  Rotate array by one to the right.
console.log("--------Rotate array by one to the right:--------");
let rotateArray = [1, 2, 3, 4];
let rotatedArray = [
  rotateArray[rotateArray.length - 1],
  ...rotateArray.slice(0, -1),
];
console.log("Rotated array:", rotatedArray);

// Check if all array elements are greater than 10.
console.log("--------Check if all array elements are greater than 10:--------");
let checkArray = [12, 15, 22];
let allGreaterThanTen = checkArray.every((num) => num > 10);
console.log("All elements greater than 10:", allGreaterThanTen);

// Filter numbers divisible by 3 and 5.
console.log("--------Filter numbers divisible by 3 and 5:--------");
let divisibleArray = [10, 15, 30, 20, 45];
let divisibleByThreeAndFive = divisibleArray.filter(
  (num) => num % 3 === 0 && num % 5 === 0
);
console.log("Numbers divisible by 3 and 5:", divisibleByThreeAndFive);

// Fibonacci sequence up to 15 terms.
console.log("--------Fibonacci sequence up to 15 terms:--------");
let fib = [0, 1];
for (let i = 2; i < 15; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Fibonacci sequence:", fib);

// Count occurrences of a value in array.
console.log("--------Count occurrences of a value in array:--------");
let countArray = [1, 2, 1, 3, 1, 4],
  Element = 1;
let count = 0;
for (let i = 0; i < countArray.length; i++) {
  if (countArray[i] === Element) {
    count++;
  }
}
console.log("Number of occurrences:", count);

// Sum of even numbers using reduce.
console.log("--------Sum of even numbers using reduce:--------");
let sumArray = [1, 2, 3, 4, 5, 6];
let sum = sumArray.reduce((total, num) => total + (num % 2 === 0 ? num : 0), 0);
console.log("Sum of even numbers:", sum);

//  Check if string is palindrome.
console.log("--------Check if string is palindrome:--------");
let palindromeStr = "madam";
let isPalindrome = palindromeStr === palindromeStr.split("").reverse().join("");
console.log("Is palindrome:", isPalindrome);

// Return grade based on marks using switch.
console.log("--------Return grade based on marks using switch:--------");
let marks = 85;
let grade;
switch (true) {
  case marks >= 90:
    grade = "A";
    break;
  case marks >= 80:
    grade = "B";
    break;
  case marks >= 70:
    grade = "C";
    break;
  case marks >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade:", grade);

// Remove duplicates from array without Set.
console.log("--------Remove duplicates from array without Set:--------");
let duplicateArray = [1, 2, 2, 3, 4, 1];
let uniqueArray = [];
for (let i = 0; i < duplicateArray.length; i++) {
  if (!uniqueArray.includes(duplicateArray[i])) {
    uniqueArray.push(duplicateArray[i]);
  }
}
console.log("Unique array:", uniqueArray);

// Slice first 3 elements of array.
console.log("--------Slice first 3 elements of array:--------");
let sliceArray = [10, 20, 30, 40, 50];
let slicedArray = sliceArray.slice(0, 3);
console.log("Sliced array:", slicedArray);

// Find intersection of two arrays.
console.log("--------Find intersection of two arrays:--------");
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let intersection = array1.filter((num) => array2.includes(num));
console.log("Intersection of arrays:", intersection);

// Reverse array using while loop (in-place).
console.log("--------Reverse array using while loop (in-place):--------");
let reverseArray = [1, 2, 3, 4];
let start = 0;
let end = reverseArray.length - 1;
while (start < end) {
  let temp = reverseArray[start];
  reverseArray[start] = reverseArray[end];
  reverseArray[end] = temp;
  start++;
  end--;
}
console.log("Reversed array:", reverseArray);

// Check if all elements in an array are positive (use flag variable).
console.log(
  "--------Check if all elements in an array are positive (use flag variable):--------"
);
let positiveArray = [1, 4, 6, 9];
let allPositive = true;
for (let i = 0; i < positiveArray.length; i++) {
  if (positiveArray[i] < 0) {
    allPositive = false;
    break;
  }
}
console.log("All elements are positive:", allPositive);

// Check if a string has both uppercase and lowercase letters.
console.log(
  "--------Check if a string has both uppercase and lowercase letters:--------"
);
let mixedCaseStr = "HelloWorld";
let hasMixedCase = /[a-z]/.test(mixedCaseStr) && /[A-Z]/.test(mixedCaseStr);
console.log("Has both uppercase and lowercase letters:", hasMixedCase);

// Determine if a number is prime using flag inside loop
console.log(
  "--------Determine if a number is prime using flag inside loop:--------"
);
let primeCheckNum = 13;
let isPrimeFlag = true;
if (primeCheckNum < 2) isPrimeFlag = false;
for (let i = 2; i <= Math.sqrt(primeCheckNum); i++) {
  if (primeCheckNum % i === 0) {
    isPrimeFlag = false;
    break;
  }
}
console.log("Is prime:", isPrimeFlag);

// Check if an array is sorted in ascending order using flag.
console.log(
  "--------Check if an array is sorted in ascending order using flag:--------"
);
let sortedArray = [2, 5, 8, 9];
let isSorted = true;
for (let i = 0; i < sortedArray.length - 1; i++) {
  if (sortedArray[i] > sortedArray[i + 1]) {
    isSorted = false;
    break;
  }
}
console.log("Is sorted:", isSorted);

// Check if a word has repeating characters using flag.
console.log(
  "--------Check if a word has repeating characters using flag:--------"
);
let word = "coding";
let hasRepeatingChars = false;
let charSet = new Set();
for (let i = 0; i < word.length; i++) {
  if (charSet.has(word[i])) {
    hasRepeatingChars = true;
    break;
  }
  charSet.add(word[i]);
}
console.log("Has repeating characters:", hasRepeatingChars);
