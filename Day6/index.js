// 1. MAP
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled);

// 2. FOREACH
let names = ["Amit", "Sita", "Ravi"];
names.forEach((name) => {
  console.log("Hello", name);
});

// 3. FILTER
let nums = [5, 10, 15, 20];
let greaterThanTen = nums.filter((num) => num > 10);
console.log(greaterThanTen);

// 4. REDUCE
let marks = [10, 20, 30];
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

// 5. EVERY
let smallNums = [2, 4, 6];
let allEven = smallNums.every((num) => num % 2 === 0);
console.log(allEven);

// 6. SOME
let ages = [10, 15, 18];
let hasAdult = ages.some((age) => age >= 18);
console.log(hasAdult);
