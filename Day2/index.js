// Assignment Operator (=)
let score = 85;
const passingGrade = 60;

// Comparison Operators
console.log("Loose Equality:");
console.log(5 == 5); // ==
console.log("5" == 5); // ==
console.log(0 == false); // ==

console.log("\nStrict Equality:");
console.log(5 === 5); // ===
console.log("5" === 5); // ===
console.log(0 === false); // ===

console.log("\nRelational Operators:");
console.log(score > passingGrade); // >
console.log(score < 90); // <
console.log(score >= 85); // >=
console.log(score <= 100); // <=

// Logical Operators
const hasSubmitted = true;
const hasPassed = score >= passingGrade;

console.log("\nLogical AND:");
console.log(hasSubmitted && hasPassed); // &&

const hasExtraCredit = false;
console.log("\nLogical OR:");
console.log(hasPassed || hasExtraCredit); // ||

const isAbsent = false;
console.log("\nLogical NOT:");
console.log(!isAbsent); // !

// Conditional Statements
console.log("\nConditional Statements:");

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= passingGrade) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
