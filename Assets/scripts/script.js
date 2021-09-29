
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
inputfield.style.color = "rgb(159, 255, 159)";
// -----------GLOBALS---------------------
var group;
var lowerCase;
var upperCase;
var numbers;
var symbols;
var boolUppercase;
var boolLowercase;
var boolNumbers;
var boolSymbols;

// ---------------LOAD---------------------------
let getCharacters = new function(){
  var x = 'abcdefghijklmnopqrstuvwxyz';
  var y = '12345678901234567890';
  var z = '`~!@#$%^&*()_+=|][:?><,./';
  var a = x.toUpperCase();
  lowerCase = x.split('');
  upperCase = a.split('');
  numbers = y.split('');
  symbols = z.split('');
  group = [upperCase,lowerCase,numbers,symbols];
  }

// --------------LISTENS------------------------------------------------------------
cmkUppercase.addEventListener('click',function(){boolUppercase = !boolUppercase });
cmkLowercase.addEventListener('click',function(){ boolLowercase = !boolLowercase });
cmknumbers.addEventListener('click',function(){ boolNumbers = !boolNumbers });
cmksymbols.addEventListener('click',function(){ boolSymbols = !boolSymbols });

btnGenerate.addEventListener("click", function() {
  var pool = [];
  var result = [];
  var bools = [boolUppercase, boolLowercase, boolNumbers, boolSymbols];  
  var characterTotal = txtLength.value;
  var additionaltext = includedword.value;

  // activity

  addCharacterGroupsToThePool();

  if(characterTotal > 8 && characterTotal < 75) {
    var i = generatePassword();
  } else { alert("Enter a correct password length please.")}  

  function addCharacterGroupsToThePool() {
    for (i = 0; i < bools.length; i++) {
      if (bools[i] === true) {
        pool = pool.concat(group[i]);
      };
    }
    if (pool.length === 0) {
      pool = lowerCase;
    }
  }
  function generatePassword() {
    for (var i = 0; i < characterTotal; i++) {
      var randomnumber = Math.floor(Math.random() * pool.length);
      result = result.concat(pool[randomnumber]);
    }
    inputfield.textContent = "\n" + additionaltext + result.join("");
    return i;
  }
});



