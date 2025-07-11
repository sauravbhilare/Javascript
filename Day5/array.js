// Q1. Add in array (push)
let food = ["Burger", "Pizza"];
food.push("Fries", "Soda");
console.log("After push:", food);

// Q2. Remove from end (pop)
let removedItem = food.pop();
console.log("Removed item:", removedItem);
console.log("After pop:", food);

// Q3. Add to beginning (unshift)
food.unshift("Salad");
console.log("After unshift:", food);

// Q4. Remove from beginning (shift)
let shiftedItem = food.shift();
console.log("Removed first item:", shiftedItem);
console.log("After shift:", food);

// Q5. Replace and Add using splice()
let fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Mango", "Orange"); // Replaces 'Banana'
console.log("After splice:", fruits);

// Q6. Search using indexOf() and includes()
console.log("Index of 'Mango':", fruits.indexOf("Mango"));
console.log("Includes 'Grapes':", fruits.includes("Grapes"));

// Q7. Slice array
let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
let slicedColors = colors.slice(1, 4);
console.log("Sliced colors:", slicedColors);

// Q8. Concatenate arrays
let coldDrinks = ["Coke", "Pepsi"];
let juices = ["Orange", "Apple"];
let allDrinks = coldDrinks.concat(juices);
console.log("All drinks:", allDrinks);

// Q9. Convert to string
console.log("To string:", allDrinks.toString());

// Q10. Find middle element
let numbers = [10, 20, 30, 40, 50];
let midIndex = Math.round((numbers.length - 1) / 2);
console.log("Middle element:", numbers[midIndex]);

// Q11. Remove one and add another using splice
let languages = ["Java", "Python", "C++"];
languages.splice(1, 1, "JavaScript"); // Replaces 'Python' with 'JavaScript'
console.log("After replacing:", languages);

// Q12. Sort array
let scores = [80, 55, 90, 100, 70];
scores.sort((a, b) => a - b);
console.log("Sorted scores:", scores);

// Q13. Reverse array
let letters = ["a", "b", "c", "d"];
let reversedLetters = letters.toReversed();
console.log("Reversed letters:", reversedLetters);

// Q14. Find element with findIndex
let temps = [23, 29, 31, 28];
let hotDayIndex = temps.findIndex((temp) => temp > 30);
console.log("First day above 30°C at index:", hotDayIndex);

// Q15. Remove multiple using splice
let tools = ["Hammer", "Screwdriver", "Wrench", "Drill"];
tools.splice(1, 2); // Removes 'Screwdriver' and 'Wrench'
console.log("After removing multiple:", tools);
