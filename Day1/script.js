// Data Types
const studentName = "Saurav Bhilare";
const studentEmail = "sauravbhilare43@gmail.com";
const studentNumber = 9834873769;
const studentAge = 22;
const isEnrolled = true;

let marks; // undefined
let address = null; // null

console.log("Name:", studentName, typeof studentName);
console.log("Email:", studentEmail, typeof studentEmail);
console.log("Number:", studentNumber, typeof studentNumber);
console.log("Age:", studentAge, typeof studentAge);
console.log("Enrolled:", isEnrolled, typeof isEnrolled);
console.log("Marks:", marks, typeof marks);
console.log("Address:", address, typeof address);

// Variables: var, let, const
var school = "Sunrise High School";
let course = "Web Development";
const batch = "2025";

// Scope and Reassign
let totalSubjects = 5;
totalSubjects = 6; // reassign

// Hoisting Example
console.log(department); // undefined due to hoisting
var department = "Computer Science";

// Operators
let counter = 0;
counter++; // 1
counter += 2; // 3
counter--; // 2
counter -= 1; // 1

console.log("Counter Value:", counter);

// Scope Block
{
  let blockLet = "Inside block";
  const blockConst = 123;
  console.log("Block Scope:", blockLet, blockConst);
}
