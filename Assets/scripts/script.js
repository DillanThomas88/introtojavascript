
// -------------THOUGHTS------------------
// listen for generate button
// check to see if check mark boxes are checked
// if none are checked use lowercase letters only
// if more than one box is checked merge all checked arrays
// check password length.
// add password length to for loop
// in for loop, generate random numbers within array.length
// print password into text box.

const btnGenerate = document.querySelector("#generate");
const cmkUppercase = document.querySelector("#uppercase");
const cmkLowercase = document.querySelector("#lowercase");
const cmknumbers = document.querySelector("#numbers");
const cmksymbols = document.querySelector("#symbols");
const txtLength = document.querySelector("#total-characters");
const includedword = document.querySelector("#additional");
const inputfield = document.querySelector("#password");
const charcaterMessageEL = document.querySelector('#character-message');
inputfield.style.color = "rgb(159, 255, 159)";
// -----------GLOBALS---------------------
var group;
var boolUppercase;
var boolLowercase;
var boolNumbers;
var boolSymbols;
var maxCharacters = 75;
var minCharacters = 8;

// ---------------LOAD---------------------------
let getCharacters = new function(){
  
  var x = 'abcdefghijklmnopqrstuvwxyz';
  var y = '12345678901234567890';
  var z = '`~!@#$%^&*()_+=|][:?><,./';
  var a = x.toUpperCase();
  var lowerCase = x.split('');
  var upperCase = a.split('');
  var numbers = y.split('');
  var symbols = z.split('');
  group = [upperCase,lowerCase,numbers,symbols];
  charcaterMessageEL.textContent = "*Must be between " + minCharacters + " and " + maxCharacters + " charcaters."
  }
// --------------LISTENERS------------------------------------------------------------
cmkUppercase.addEventListener('click',function(){boolUppercase = !boolUppercase });
cmkLowercase.addEventListener('click',function(){ boolLowercase = !boolLowercase });
cmknumbers.addEventListener('click',function(){ boolNumbers = !boolNumbers });
cmksymbols.addEventListener('click',function(){ boolSymbols = !boolSymbols });
btnGenerate.addEventListener("click", GeneratePassword)

// ------------FUNCTIONS--------------------------------------------------------------
function GeneratePassword() {
  var pool = [];
  var result = [];
  var bools = [boolUppercase, boolLowercase, boolNumbers, boolSymbols];
  var characterLength = txtLength.value;
  var additionaltext = includedword.value;

  if (characterLength >= minCharacters && characterLength <= maxCharacters) {
    for (i = 0; i < bools.length; i++) {
      if (bools[i] === true) {
        pool = pool.concat(group[i]);
      };
    }
    if (pool.length === 0) {
      pool = group[1];
    }
    for (var i = 0; i < characterLength; i++) {
      var randomnumber = Math.floor(Math.random() * pool.length);
      result = result.concat(pool[randomnumber]);
    }
    inputfield.textContent = "\n" + additionaltext + result.join("");
  } else { alert("Enter a correct password length please."); }
}

