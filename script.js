// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var all = [""];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var spe = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var how = prompt("how long should it be?");
  var uppercase = confirm("include uppercase?");
  var lowercase = confirm("include lowercase?");
  var number = confirm("include numbers?");
  var specail = confirm("include specical casings?");
  function get(max) {
    for (i = 1; i < how; i++) {
      
    console.log (Math.floor(Math.random() * Math.floor(max)));
  }
}

  console.log(get(how));

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
// over 8 under 128
//make all indivual arays and make it so they add to the master aray and then use math.random to chose form list 
//use the promt to chose how many the mathdot ranodom needes 