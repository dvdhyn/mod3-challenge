// Assignment Code
var generateBtn = document.querySelector("#generate");

// defines possible values for lowercase, uppercase, numbers, and special characters
var lowCase=["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var upCase=["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var numb=["0,1,2,3,4,5,6,7,8,9"];
var type=["-,_,=,+,~,`,|,{,},[,],;,:,',<,>,.,/,?,!,@,#,$,%,^,&,*,(,)"];

// defined missing function from function writePassword()
// needs user input for character length, case, and type
function generatePassword() {
  var userPass="";
  var charBank="";
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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
