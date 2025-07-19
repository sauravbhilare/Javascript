// 1. Ternary Operator
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log("Ternary Result:", result);

// 2. Template Literals
let name = "Saurav";
let course = "JavaScript";
let year = 2025;

let message = `Hello ${name}, welcome to the ${course} course - ${year}`;
console.log("Template Literal Message:", message);

// 4. Callback Function
function ask(question, yes, no) {
  const userResponse = true;
  if (userResponse) yes();
  else no();
}
function showYes() {
  console.log("You agreed.");
}
function showNo() {
  console.log("You canceled.");
}

ask("Do you like coding?", showYes, showNo);

// 5. Promise Example
function checkTemp(temp) {
  return new Promise((resolve, reject) => {
    if (temp < 30) {
      resolve("Cool day");
    } else {
      reject("Hot day");
    }
  });
}

checkTemp(35)
  .then((msg) => console.log("Promise Success:", msg))
  .catch((err) => console.log("Promise Error:", err));

function welcomeUser(name, callback) {
  let greet = `Hello ${name}, nice to meet you!`;
  console.log(greet);

  setTimeout(() => {
    callback();
  }, 2000);
}

function delayedMessage() {
  console.log("Your session will begin shortly...");
}

let userName = "Saurav";
welcomeUser(userName, delayedMessage);
