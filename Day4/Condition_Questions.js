// --------------------------------------------
// 1. Check if number is positive, negative, or zero
// --------------------------------------------
let number = -5;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// --------------------------------------------
// 2. Check if number is even or odd
// --------------------------------------------
let num = 9;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// --------------------------------------------
// 3. Age categorization
// --------------------------------------------
let age = 16;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// --------------------------------------------
// 4. Grade based on marks
// --------------------------------------------
let marks = 82;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// --------------------------------------------
// 5. Day of the week (1–7)
// --------------------------------------------
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// --------------------------------------------
// 6. Vowel or consonant using switch
// --------------------------------------------
let char = "I";

switch (char.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`${char} is a vowel`);
    break;
  default:
    console.log(`${char} is a consonant`);
}

// --------------------------------------------
// 7. Check leap year
// --------------------------------------------
let year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// --------------------------------------------
// 8. Arithmetic operations using switch
// --------------------------------------------
let a = 12;
let b = 4;
let operator = "/";

switch (operator) {
  case "+":
    console.log("Result:", a + b);
    break;
  case "-":
    console.log("Result:", a - b);
    break;
  case "*":
    console.log("Result:", a * b);
    break;
  case "/":
    console.log("Result:", b !== 0 ? a / b : "Cannot divide by zero");
    break;
  default:
    console.log("Invalid operator");
}

// --------------------------------------------
// 9. Check voting eligibility
// --------------------------------------------
let voterAge = 17;

if (voterAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// --------------------------------------------
// 10. Check if sides form a triangle
// --------------------------------------------
let side1 = 5,
  side2 = 6,
  side3 = 7;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Can form a triangle");
} else {
  console.log("Cannot form a triangle");
}
