<<<<<<< HEAD
// --------------------------------------------
// 1. Print all even numbers from 1 to 50
// --------------------------------------------
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

// --------------------------------------------
// 2. Print numbers from 10 to 1 using while loop
// --------------------------------------------
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// --------------------------------------------
// 3. Multiplication table of a number (e.g., 7)
// --------------------------------------------
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// --------------------------------------------
// 4. Print odd numbers from 1 to 100
// --------------------------------------------
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("Odd:", i);
  }
}

// --------------------------------------------
// 5. Count numbers divisible by both 3 and 5 (1–100)
// --------------------------------------------
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    count++;
  }
}
console.log("Divisible by 3 and 5 count:", count);

// --------------------------------------------
// 6. Print factorial of a number using while loop
// --------------------------------------------
let number = 5;
let fact = 1;
let i = 1;
while (i <= number) {
  fact *= i;
  i++;
}
console.log(`Factorial of ${number}:`, fact);

// --------------------------------------------
// 7. Sum of numbers from 1 to 100
// --------------------------------------------
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);

// --------------------------------------------
// 8. FizzBuzz from 1 to 50 using loop and switch
// --------------------------------------------
for (let i = 1; i <= 50; i++) {
  let result = "";
  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";

  switch (result) {
    case "Fizz":
      console.log(i, "Fizz");
      break;
    case "Buzz":
      console.log(i, "Buzz");
      break;
    case "FizzBuzz":
      console.log(i, "FizzBuzz");
      break;
    default:
      console.log(i);
  }
}

// --------------------------------------------
// 9. First 10 Fibonacci numbers using while loop
// --------------------------------------------
let a = 0,
  b = 1,
  n = 1;
console.log("Fibonacci:", a);
console.log("Fibonacci:", b);
while (n <= 8) {
  let next = a + b;
  console.log("Fibonacci:", next);
  a = b;
  b = next;
  n++;
}

// --------------------------------------------
// 10. Square of numbers 1 to 10 and categorize
// --------------------------------------------
for (let i = 1; i <= 10; i++) {
  let square = i * i;
  let category = "";

  if (square < 20) {
    category = "Small";
  } else if (square <= 50) {
    category = "Medium";
  } else {
    category = "Large";
  }

  console.log(`Square of ${i}: ${square} - ${category}`);
}
=======
// --------------------------------------------
// 1. Print all even numbers from 1 to 50
// --------------------------------------------
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

// --------------------------------------------
// 2. Print numbers from 10 to 1 using while loop
// --------------------------------------------
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// --------------------------------------------
// 3. Multiplication table of a number (e.g., 7)
// --------------------------------------------
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// --------------------------------------------
// 4. Print odd numbers from 1 to 100
// --------------------------------------------
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("Odd:", i);
  }
}

// --------------------------------------------
// 5. Count numbers divisible by both 3 and 5 (1–100)
// --------------------------------------------
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    count++;
  }
}
console.log("Divisible by 3 and 5 count:", count);

// --------------------------------------------
// 6. Print factorial of a number using while loop
// --------------------------------------------
let number = 5;
let fact = 1;
let i = 1;
while (i <= number) {
  fact *= i;
  i++;
}
console.log(`Factorial of ${number}:`, fact);

// --------------------------------------------
// 7. Sum of numbers from 1 to 100
// --------------------------------------------
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);

// --------------------------------------------
// 8. FizzBuzz from 1 to 50 using loop and switch
// --------------------------------------------
for (let i = 1; i <= 50; i++) {
  let result = "";
  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";

  switch (result) {
    case "Fizz":
      console.log(i, "Fizz");
      break;
    case "Buzz":
      console.log(i, "Buzz");
      break;
    case "FizzBuzz":
      console.log(i, "FizzBuzz");
      break;
    default:
      console.log(i);
  }
}

// --------------------------------------------
// 9. First 10 Fibonacci numbers using while loop
// --------------------------------------------
let a = 0,
  b = 1,
  n = 1;
console.log("Fibonacci:", a);
console.log("Fibonacci:", b);
while (n <= 8) {
  let next = a + b;
  console.log("Fibonacci:", next);
  a = b;
  b = next;
  n++;
}

// --------------------------------------------
// 10. Square of numbers 1 to 10 and categorize
// --------------------------------------------
for (let i = 1; i <= 10; i++) {
  let square = i * i;
  let category = "";

  if (square < 20) {
    category = "Small";
  } else if (square <= 50) {
    category = "Medium";
  } else {
    category = "Large";
  }

  console.log(`Square of ${i}: ${square} - ${category}`);
}
>>>>>>> 0dc524bd854836336ebf4e8289f0f0ffdae6eb70
