// ✅ Assignment: Basic Arrow Functions and Array Filtering

// 1. Add Two Numbers Without Parameters
let x = 5;
let y = 10;

const addNumbers = () => {
  return x + y;
};

console.log(addNumbers());

// 2. Multiply Two Numbers Using Parameters
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 3));

// 3. Add Three Numbers Using Parameters
const addThree = (a, b, c) => {
  return a + b + c;
};

console.log(addThree(2, 5, 8));

// 4. Filter Bike Names That Match the Target Bike
let bikes = ["Classic 350", "Bullet", "Himalayan", "GT-650", "Hunter 350"];
let targetBike = "GT-650";

const filterBikes = (arr, target) => {
  return arr.filter((bike) => bike === target);
};

console.log(filterBikes(bikes, targetBike));
