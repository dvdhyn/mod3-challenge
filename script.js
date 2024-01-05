// Assignment Code
var generateBtn = document.querySelector("#generate");

// defines possible values for lowercase, uppercase, numbers, and special characters
// ___had to move variables userPass and charBank to global scale to allow generatePassword() and writePassword() functions to operate properly___ //
var lowCase=["abcdefghijklmnopqrstuvwxyz"];
var upCase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numb=["0123456789"];
var type=["-_=+~`|{}[];:'<>./?!@#$%^&*()"];

var charBank="";

// defined missing generatePassword() function from function writePassword()
// created variables for each user input confirming character length, case, and types
function generatePassword() {
  var userPass="";
  var charLength=prompt("How many characters will your password be? (must be 8-128 characters)");
  if (charLength < 8 || charLength > 128) {
    alert("Password must be more than 8 characters and less than 128 characters.");
    return;
  }
  var charLowCase=confirm("Include lowercase letters?");
  if (charLowCase) {
    charBank += lowCase;
  }
  var charUpCase=confirm("Include uppercase letters?");
  if (charUpCase) {
    charBank += upCase;
  }
  var charNumb=confirm("Include numbers?");
  if (charNumb) {
    charBank += numb;
  }
  var charType=confirm("Include special characters?");
  if (charType) {
    charBank += type;
  }
  
  // added input validation so at least one condition must be answered by user
  if (!charLowCase && !charUpCase && !charNumb && !charType) {
    alert("Please confirm at least one prompt for your password.");
  } else {
  // used to confirm correct items are being added to varialbe charBank
  console.log(charBank);

  // for loop will continue to pick random values from variable charBank until desired character length is reached
  for (var i = 0; i < charLength; i++) {
    userPass=userPass += charBank.charAt(Math.floor(Math.random() * charBank.length));
  }
  console.log(userPass);
  // opted for an alert and a return for userPass result
  alert("Your generated password is: " + userPass);
  return(userPass);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
