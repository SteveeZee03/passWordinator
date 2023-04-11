//sets variable potential PW length
var charLength;
//this sets a global variable for array below
var choiceArr = [];

//four chracter types in their own array
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

function makePassword() {
    var rightPrompt = getPrompts();
    passwordTxt = document.querySelector("#password");

    if (rightPrompt) {
        var password = generatePassword();
        passwordTxt.value = password;
    } else {
        passwordTxt.value = " ";
    }
};

generateBtn.addEventListener('click', makePassword);


function generatePassword() {
    var password = "";
    console.log(choiceArr, "length")
    console.log(charLength, "character length");

    for (var i = 0; i < charLength; i++) {
        randomIndex = (Math.floor(Math.random() * choiceArr.length));
        console.log(randomIndex, "Index");
        password += choiceArr[randomIndex];
        console.log(password, "password");
    }
    return password;
};

function getPrompts() {
    charLength = parseInt(prompt("Please enter a password thats between 8-128 characters :"));

    if (isNaN(charLength) || charLength <8 || charLength > 128) {
        alert("password must contain between 8 128");
        return false;
    }
}
