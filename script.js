// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var all = [""];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var spe = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var how = prompt("how long should it be?");
  if (!how) {
    alert("there needs to be a number")
  }
  else if (how < 8 || how > 128) {
    alert("needs to be between 8-128");
  }
  else {
    var uppercase = confirm("include uppercase?");
    var lowercase = confirm("include lowercase?");
    var number = confirm("include numbers?");
    var specail = confirm("include specical casings?");

  };
  if (!uppercase && !lowercase && !number && !specail) {
    alert("hey aye it cant be empty")

  }
  else if (uppercase && lowercase && number && specail) {
    all=all.concat(all+upper+lower+num+spe)
    console.log("1" + all)
      ;

  }
  /*3 */
  else if (uppercase && lowercase && number) {
    all=all.concat(all+upper+lower+num+spe)
    console.log("1" + all)
      ;

  } 
  else if (uppercase && lowercase  && specail) {
    all=all.concat(all+upper+lower+spe)
    console.log("1" + all)
      ;

  }
  else if (uppercase && number && specail) {
    all=all.concat(all+upper+num+spe)
    console.log("1" + all)
      ;

  }
  else if ( lowercase && number && specail) {
    all=all.concat(all+lower+num+spe)
    console.log("1" + all)
      ;

  }
 
  /*2*/
  else if (uppercase && lowercase ) {
    all=all.concat(all+upper+lower)
    console.log("1" + all)
      ;

  }else if ( number && specail) {
    all=all.concat(all+num+spe)
    console.log("1" + all)
      ;

  }else if (uppercase  && specail) {
    all=all.concat(all+upper+spe)
    console.log("1" + all)
      ;

  }else if (uppercase && number ) {
    all=all.concat(all+upper+num)
    console.log("1" + all)
      ;

  }else if (uppercase  && specail) {
    all=all.concat(all+upper+spe)
    console.log("1" + all)
      ;

  }else if (lowercase && number){
    all=all.concat(all+lower+num)
    console.log("1" + all)
      ;

  }
  else if (number && specail) {
    all=all.concat(all+num+spe)
    console.log("1" + all)
      ;

  }
  /**1 */
  else if (specail){
    all=all.concat(all+spe)
    console.log("1" + all)
      ;

  }else if ( number) {
    all=all.concat(all+num)
    console.log("1" + all)
      ;

  }else if (lowercase ){
    all=all.concat(all+lower)
    console.log("1" + all)
      ;

  }else if (uppercase) {
    all=all.concat(all+upper)
    console.log("1" + all)
      ;

  }
  for (var i = 0; i < enter; i++) {
    var pick = choices[Math.floor(Math.random() * how.length)];
    all.push(pickChoices);
}







  return console.log("1" + all)
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