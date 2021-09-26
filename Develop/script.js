// -------------THOUGHTS------------------
// listen for generate button press

// check to see if check mark boxes are checked

// if none are checked use just lowercase letters

// if more than one box is checked combine all arrays that are checked

// check password length.

// add password length to for loop

// in for loop, generate random numbers in arr.length

// print password into text box.



// -----------GLOBALS---------------------


var alphabetLower;
var alphabetUpper;
var allNumbers;
var allSymbols;
var characters;

const btnGenerate = document.getElementById("generate");
const cmkUppercase = document.getElementById("uppercase");
const cmkLowercase = document.getElementById("lowercase");
const cmknumbers = document.getElementById("numbers");
const cmksymbols = document.getElementById("symbols");
const txtLength = document.getElementById("total-characters");

var uppercase = false;
var lowercase = false;
var numbers = false;
var symbols = false;

// ---------------LOAD---------------------------
let startUp = new function()
 {
  var x = 'abcdefghijklmnopqrstuvwxyz';
  var y = x.toUpperCase();

  alphabetLower = x.split('');
  alphabetUpper = y.split('');
  allNumbers = [1,2,3,4,5,6,7,8,9,0];
  allSymbols = ["!","@","#","$","%","^","&","*","(",")","_","+","<",">","?","~",""];
  characters = [alphabetUpper,alphabetLower,allNumbers,allSymbols];
}


// --------------LISTEN-FOR-GENERATE---------------


btnGenerate.addEventListener("click", function() {

  var bank = [uppercase,lowercase,numbers,symbols];
  var all = [];
  var characterTotal;
  var result = [];
// figure out which types are selected and add to 'all' array.

    for (i = 0; i < bank.length; i++) {
    if(bank[i] === true) {
      all = all.concat(characters[i]); 
      // console.log("added")   
    }
    else {}
  }

// if no types selected, use lowercase letter only

  if(all.length === 0) {
    all = all.concat(characters[1])
    // console.log("none selected")

  } else {
    // figure out the total number of characters

    if( txtLength.value == isNaN(txtLength.value)){
      alert("Enter a correct password length please.")

    } else {
      characterTotal = txtLength.value;
      // console.log("found the number")      
    }
  }
 
  
  // console.log(all)
  // ----------BUILD PASSWORD----------------------
  
  if(characterTotal < 8 || characterTotal > 50) {
    alert("Enter a correct password length please.")
  } else {
    if (all === 0){
      console.log("error")
    }
    for ( var i = 0; i < characterTotal; i++ ) {
      var randomnumber = Math.floor(Math.random() * all.length)
      result = result.concat(all[randomnumber])
    }
    var inputfield = document.getElementById("password");
    inputfield.textContent = "password: " + result.join("");
    inputfield.style.color = "rgb(80, 132, 251)";
  }

// ----------DISPLAY-PASSWORD-FOR-USER----------------



});



// -------------LISTEN-FOR-CHECKS---------------------



cmkUppercase.addEventListener('click',function(){
    uppercase = !uppercase;
    // console.log(uppercase)
})
cmkLowercase.addEventListener('click',function(){
  lowercase = !lowercase;
  // console.log(lowercase)
})
cmknumbers.addEventListener('click',function(){
  numbers = !numbers;
  // console.log(numbers)
})
cmksymbols.addEventListener('click',function(){
  symbols = !symbols;
  // console.log(symbols)
})


