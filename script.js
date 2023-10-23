// Assignment Code
var generateBtn = document.querySelector("#generate");

// defined missing function from function writePassword()
// needs user input for character length, case, and type
function generatePassword() {
  var charLength=prompt("How many characters will your password be? (must be 8-128 characters)");
  if (charLength < 8 || charLength > 128) {
    alert("Password must be more than 8 characters and less than 128 characters.");
    return;
  }
  var charCase=prompt("Include uppercase letters? (Press Y for yes / Press N for no)");
  var charNumb=prompt("Include numbers? (Press Y for yes / Press N for no)");
  var charType=prompt("Include special characters? (Press Y for yes / Press N for no)");

//  return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
