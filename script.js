// Assignment Code
var generateBtn = document.querySelector("#generate");

// defines possible values for lowercase, uppercase, numbers, and special characters
var lowCase=["abcdefghijklmnopqrstuvwxyz"];
var upCase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numb=["0123456789"];
var type=["-_=+~`|{}[];:'<>./?!@#$%^&*()"];
var userPass="";
var charBank="";

// defined missing function from function writePassword()
// needs user input for character length, case, and type
function generatePassword() {
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

  console.log(charBank);

  for (var i = 0; i < charLength; i++) {
    userPass=userPass += charBank.charAt(Math.floor(Math.random() * charBank.length));
  }
  console.log(userPass);
  alert("Your generated password is: " + userPass);
  return(userPass);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
