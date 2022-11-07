// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rando = Math.random()
  return Math.floor(min*(1-rando) + rando*max)
}
function getRandomResult(list) {
  return list [randomInt(list.length)]
}

function generatePassword() {
  
  /*Sets up questions for password creation. */
  var userInput = window.prompt("Input the length of your desired code")

  var passwordLength = parseInt(userInput)

 /*If user does not input password length with numbers.*/
  if (isNaN(passwordLength)) {
    window.alert("Please select your password length with numeric characters.")
    return
  }  

  if (passwordLength <8 || passwordLength > 128) {
    window.alert("Your password length must be between 8 and 128 chatacters.")
    return
  }

  /* Window confirm prompts are being linked to their respective character list by linking "userPicks" and "____ list"s with their own characters.                                                                                                            Based on what the user chooses,it will then push into variable "userPicks" to hold the final options. */

  var userPicksNumbers   = window.confirm("Would you like to include numbers in your password?")
  var userPicksSymbols   = window.confirm("Would you like to include symbols in your password?")
  var userPicksLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userPicksUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numberList    = ["0", "1", "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",]
  var symbolList    = ["!", "@", "#", "$", "%", "^", "&","/","?","-","+", "=", "|", ";", ":", "'", "<", ">",]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var uppercaseList = []

  var userPicks = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList [i] = lowercaseList[i].toUpperCase()
  }

  if (userPicksNumbers === true) {
    userPicks.push(numberList)
  }

  if (userPicksSymbols === true) {
    userPicks.push(symbolList)
  }

  if (userPicksLowercase === true) {
    userPicks.push(lowercaseList)
  }

  if (userPicksUppercase === true) {
    userPicks.push(uppercaseList)
  }

  if (userPicks.length === 0){
    userPicks.push(numberList)
  }

/*With the help of the functions and variables above line 17 and below line 74, the password was able randomize in one single line.*/
    var generatedPass = ""

    for (var i = 0; i < passwordLength; i++) {
      var randomList       = getRandomResult(userPicks)
      var randomCharcaters = getRandomResult(randomList)
      generatedPass        += randomCharcaters
    }
    console.log(generatedPass)
    return generatedPass 
}

// Write password to the #password input
function writePassword() {
  var password  = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
