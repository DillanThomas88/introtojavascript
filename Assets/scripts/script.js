// -------------THOUGHTS------------------
// listen for generate button
// check to see if check mark boxes are checked
// if none are checked use lowercase letters only
// if more than one box is checked merge all checked arrays
// check password length.
// add password length to for loop
// in for loop, generate random numbers within array.length
// print password into text box.
const btnGenerate = document.getElementById("generate");
const cmkUppercase = document.getElementById("uppercase");
const cmkLowercase = document.getElementById("lowercase");
const cmknumbers = document.getElementById("numbers");
const cmksymbols = document.getElementById("symbols");
const txtLength = document.getElementById("total-characters");
// -----------GLOBALS---------------------
var group;
var lowerCase;
var upperCase;
var numbers;
var symbols;
var boolUppercase = false;
var boolLowercase = false;
var boolNumbers = false;
var boolSymbols = false;
// ---------------LOAD---------------------------
let startUp = new function(){
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
  // local-vars
  var bools = [boolUppercase,boolLowercase,boolNumbers,boolSymbols];
  var pool = []; 
  var result = [];
  var characterTotal;
  var inputfield = document.getElementById("password");
  // activity
  if(txtLength.value != isNaN(txtLength.value)){
    characterTotal = txtLength.value;
  } else { alert("Enter a correct password length please.")}
  for (i = 0; i < bools.length; i++) {
    if(bools[i] === true) {pool = pool.concat(group[i])};
  }
  if(pool.length === 0) {pool = pool.concat(group[1])};  
  if(characterTotal > 8 && characterTotal < 75) {
    for ( var i = 0; i < characterTotal; i++ ) {
      var randomnumber = Math.floor(Math.random() * pool.length)
      result = result.concat(pool[randomnumber])
      inputfield.textContent = "" + "\n" + result.join("");
      inputfield.style.color = "rgb(159, 255, 159)";
    }
  } else { alert("Enter a correct password length please.")}
});


