// Example:
// Write a for loop that logs the numbers 0 through 5
console.log('Example:');

for (let i = 0; i < 6; i++) {
  console.log(i);
}


// 1.
// Write a for loop that runs the same logic
// as the following code
//
// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

console.log('Question 1:');

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 2.
// Write a for loop that runs the same logic
// as the following code
//
// let i = 10;
// console.log(i+3);
// i--;
// console.log(i+3);
// i--;
// console.log(i+3);
// i--;
// console.log(i+3);
// i--;

console.log('Question 2:');

for (let i = 10; i >= 7; i--) {
  console.log(i+3);
}


// 3.
// Write a for loop that logs the numbers 0 through 10

console.log('Question 3:');

for (let i = 0; i < 11; i++) {
  console.log(i);
}



// 4.
// Write a loop that logs the numbers 10 through 0

console.log('Question 4:');

for (let i = 10; i >= 0; i--) {
  console.log(i);
}


// 5.
// Write a loop that logs the word "Hippopotamus" 17 times.

console.log('Question 5:');

for (let i = 0; i < 17; i++) {
  console.log("Hippopotamus");
}

// 6.
// Write a for loop that logs 2, 4, 6, 8, 10

console.log('Question 6:');

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 7.
// Write a loop that logs the numbers 2, 4, 6, 8.
// Do not edit the existing code.

console.log('Question 7:');


for (let i = 0; i < 4; i++) {
  console.log((i + 1) * 2);
}

// 8.
// Write a loop that logs the numbers 5 through 10.
// Do not edit the existing code.
// Hint: Use an if/else statement

console.log('Question 8:');

for (let i = 0; i < 20; i++) {
  if (i >= 5 && i <= 10){
    console.log(i);
  }
}

// 9.
// Write a loop that logs "Marco!" when i is even,
// "Polo!" when i is odd.
// Do not edit the existing code.
// Hint 1: Use an if/else statement
// Hint 2: Google the mod operator (%)

console.log('Question 9:');

for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log("Marco!");
  } else {
    console.log("Polo!");
  }
}

// STRETCH PROBLEMS (NOT REQUIRED)

// 10.
// Find a second way to write the loop from question 8.
// Do not edit the existing code.

console.log('Stretch Question 10:');


for (let i = 0; i < 20; i++) {
  if (!(i < 5) && !!(i <= 10)) {
    console.log(i);
  }
}


// 11.
// Write a loop that logs the numbers 0 through 10.
// Finish the code in the parentheses
// Do not edit any other existing code.

console.log('Stretch Question 11:');

for (let i = 0; i <= 50; i += 5) {

  //Do not add or edit code below here!
  if (i < 0) {
    continue;
  } else if ( i > 50) {
    break;
  } else {
    console.log(i/5);
  }
}

// 12.
// Imagine you are throwing two six sided dice.
// Write a lested loop that logs every possible combination you could roll.
// Your log statements should look like:
// 1 & 1
// 1 & 2
// 1 & 3
// 1 & 4
// 1 & 5
// 1 & 6
// 2 & 1
// 2 & 2
// 2 & 3
// etc.

console.log('Stretch Question 12:');

for (let i = 1; i <= 6; i++) {
  let x = i;
  for (let j = 1; j<= 6; j++) {
    console.log(`${x} & ${j}`);
  }
}
