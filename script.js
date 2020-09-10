// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upper =[ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var lower =[ "abcdefghijklmnopqrstuvwxyz"];
  var numb =[ "0123456789"];
  var other =["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  var how = prompt ("how long should it be?");
  var uppercase = confirm ("include uppercase?");
  var lowercase = confirm ("include lowercase?");
  var number = confirm ("include numbers?");
  var specail = confirm ("include specical casings?");

  return "tacotest"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
