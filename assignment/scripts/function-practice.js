console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let answer = 'Hello, ' + name + '!';
  return answer;
}
// Remember to call the function to test
console.log(helloName('Abdi'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
    return answer;
}
console.log('The sum is ', addNumbers(9, 2));
console.log('The sum is ', addNumbers(11, 3));
console.log('The sum is ', addNumbers(-3, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z  ){
  let multAnswer = x * y * z;
    return multAnswer;
}
console.log('The answer is ', multiplyThree(-3, 2, 1));
console.log('The answer is ', multiplyThree(0, 5, 7));
console.log('The answer is ', multiplyThree(3, 4, 2));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastItem = array[array.length - 1];
    if (lastItem < 0){
      return `undefined`;
  }
    return lastItem;
}

  let Food = ['spaghetti', 'rice', 'cheese', 'gyros', 'tiramisu'];
  console.log(getLast( Food ));

  let Nothing = [];
  console.log(getLast( Nothing ));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  function find( value, array ){
    let thisThing = array.indexOf(value);
    if (thisThing >= 0) {
      return true;
    }
    return false;
}

console.log(find('spaghetti', Food));
console.log(find('spaghetti', Nothing));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter == string.charAt(0)){
      return true;
    }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  for (let i=0; i < array.length; i++){
      sum += array[i];}
  return sum;
}

let oddNumbers = [1, 3, 5, 7, 9];
console.log('The sum of single-digit odd numbers is:', sumAll( oddNumbers ));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function newArray ( array ) {
  let brandNewArray = [];
  for (let value of array) {
    if (value > 0) {
      brandNewArray.push( value );
      console.log('brandNewArray is growing:', brandNewArray );
    } else
      console.log('[]');
  }
  return brandNewArray;
}

console.log('The inputArray has remained:', inputArray);
console.log('The positive numbers of our inputArray are as follows:', newArray( inputArray ));
console.log('The positive numbers of anotherArray are:', newArray( anotherArray ));



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
let list = [0, 1, 2, '44', 'rocks', 123]
function filterList(array) {
  let newArray = [];
  for(let item of array) {
    if(item >= 0 && typeof item === "number") {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log('This is my list', list);
console.log( 'filtering list to remove strings',
filterList(list) );
