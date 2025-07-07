console.log("--------- Print Even Numbers from 1 to 20 ---------");
//print even numbers from 1 to 20 using a do-while loop
let i = 1;

do {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
  i++;
} while (i <= 20);

console.log("---------Break At 5---------");
//print no 1 to 10 but break at 5
for (let j = 1; j <= 10; j++) {
  if (j === 5) {
    break;
  }
  console.log("Number:", j);
}

console.log("---------ODD No 1 to 20---------");
//print ODD numbers from 1 to 20 using Continue
for (let k = 1; k <= 20; k++) {
  if (k % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd:", k);
}
