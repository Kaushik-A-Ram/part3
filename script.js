// create the variables
// first string nothing remarkable
let myString = "This is a string";
// this string more interesting with 3 spaces before text
let anotherString = "   Another string";
// most interesting string because quotation mark seems to be missing
let hello = "Hello there!";
// my name in string variable
myName = "Kaushik";

// finding the length of string
const stringLength = myString.length;
console.log(stringLength);

// find first character of string
const firstChar = myString.charAt(0);
console.log(firstChar);

// find the 11th character of string
const findCharacter = myString[10];
console.log(findCharacter);


// using slice and substring
// slicing myString for "is a"
const slicedString = myString.slice(5, 9);
console.log(slicedString);

// substring create new string to get "the"
const substringAnotherString = anotherString.substring(6, 9);
console.log(substringAnotherString);

// print out string to upper case
console.log(myName.toUpperCase())

// print out string to lower case
console.log(myName.toLowerCase());

// concat strings together
const stringConcat = hello + myName;
console.log(stringConcat);

// trim to remove spaces
const trimmedAnotherString = anotherString.trim();
console.log(trimmedAnotherString)

// replace "is a" from myString to empty space
const replacedString = myString.replace("is a", " ");
console.log(replacedString);

// split string on the spaces
const splitString = myString.split(" ");
console.log(splitString);