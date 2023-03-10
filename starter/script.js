// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 //Check the prompt options (Lowercase/Uppercase/Numeric/Special characters)
 let lowercasePass = confirm("Add a password featuring lowercase characters: ")
 let uppercasePass = confirm("Add a password featuring uppercase characters: ")
 let numericPass = confirm("Add a password featuring numbers: ")
 let specialCharactersPass = confirm("Add a password featuring special characters: ")
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let passwordText = "";
  let passwordLength = 0;
  let lowercasePass;
  let uppercasePass;
  let numericPass;
  let specialCharactersPass;
// Step 1: Check length of password
  while (passwordLength < 10 || passwordLength > 64) { 
    passwordLength = prompt ("How many characters would you like your password to be (Your password must be between 10-64 characters) :");
  
  if (isNaN(passwordLength)) {
    alert("The password length needs to be a number.");
  } else if(passwordLength === null){
    alert("Please try again");
    return;
  } else if (isNaN(passwordLength)) {
    alert("The password length needs to be a number.");
    return;
  } else if(passwordLength < 10 || passwordLength > 64) {
    alert("Your password must contain between 10 and 64 characters"); 
  } else {
    getPasswordOptions();
  }
// Step 2: Check the Character types (Lowercase/Uppercase/Numeric/Special characters)

};

    
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);