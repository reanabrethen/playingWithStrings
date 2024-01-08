/******************
 * YOUR CODE HERE *
 ******************/

function xify(str){
  let newStr = ''

  for(let i = 0; i < str.length; i++){
   newStr += 'x'
  } 
return newStr
}
//doesn't need validations
//doesn't matter what character is, it's just replacing with x
//----------------------------------------------------------------------

function yellingChars(str){
  let newStr = ''

for(let i = 0; i < str.length; i++){
  newStr += str[i] + '!'
} return newStr
  }

  //loop through string, and insert a '!' after every character
  //include current character w/ '!'
  //return str
//-------------------------------------------------------------------------

function indexedChars(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){
      newStr += i + str[i]
    } return newStr
}

//-----------------------------------------------------------------------------

function numberedChars(str){
  let newStr = ''
   
  for(let i = 0; i < str.length; i++){
    newStr += ('(' + (i + 1) + ')' + str[i])
  } return newStr
}

//---------------------------------------------------------------------------
function exclaim(str){
let newStr = ""

for(let i = 0; i < str.length; i++){
  if(str[i] === '?' || str[i] === '.'){
    newStr += '!'
  }else{
    newStr += str[i]
  }
} return newStr

//WHAT AM I DOING WRONG HERE???
//   for(let char of str){
//     if(char === '?' || char === '.'){
//      char += '!'
//     newStr = str + char 
//     }
// } return newStr
}

//---------------------------------------------------------------------


function repeatIt(str, n){
  let repeatStr = ''

  for(let i = 0; i < n; i++){
    repeatStr += str
   } return repeatStr 
} 

//----------------------------------------------------------------------------

function truncate(str){
  let finalStr = ""

  if(str.length <= 18){
    return str
  }else{
  for(let char of str){
    if(finalStr.length < 15){
      finalStr = finalStr + char
    }
  } return finalStr + '...'
}
}

//----------------------------------------------------------------------------

function emailify(str){
    let lowerStr = str.toLowerCase()
    let newStr = lowerStr.indexOf(" ") + 1
    email= ""
    for (let i = newStr; i < lowerStr.length; i++){
      email= email+ lowerStr[i]
    }
    return lowerStr[0] + email + ".prsvr@gmail.com"
  }
  
// can use indexof






//-------------------------------------------------------------------------------------
function reverse(str){
  let reversedStr = ''

  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i]
  }return reversedStr
}

//----------------------------------------------------------------------------------

function onlyVowels(str){
let vowels = ''

for(let i = 0; i < str.length; i++){
  let letter = str[i]
  if('aeiouAEIOU'.includes(letter)){
    vowels += letter
  }
} return vowels
}

//-----------------------------------------------------

function crazyCase(str) {
  let newStr = "";
  let sillyStr = false;
  for (let char of str){
    if (sillyStr) {
      char = char.toUpperCase();
    } else {
      char = char.toLowerCase();
    }
    newStr += char;
    sillyStr = !sillyStr;
  }
  return newStr;
}
// using str methods

// function crazyCase(str){
//   let chars = str.toLowerCase().split("")
    
//   for(let i = 0; i < chars.length; i += 2){    iterates through every other character w/ += 2 [do not use = 2 --> infinte loop -.-]
//       chars[i] = chars[i].toUpperCase()
//     } return chars.join("")
//   }

//----------------------------------------------------------------------

function titleCase(str){
// create newStr to hold transformed str
let newStr = ''
let capatilize = true

//loop through str & capatilize every first letter of every word
for(let char of str){
  if(capatilize){
    char = char.toUpperCase()
  }//all other characters are lowercase
  else{
    char = char.toLowerCase()
  }
  newStr += char
  capatilize = (char === " ")
}//return str 
  return newStr
}

//-------------------------------------------------------------------

function camelCase(str){
let camelStr = ''

for(let i = 0; i < str.length; i++){
  let char = str[i]
  if(char !== " "){
    if(i > 0 && str[i - 1] === " "){
      char = char.toUpperCase()
    }else{
      char = char.toLowerCase()
    } camelStr += char
  }
} return camelStr
}


//------------------------------------------------------------------

function crazyCase2ReturnOfCrazyCase(str){
  let newStr = ''
  let sillyCase = false
  
  for(let char of str){
    if(char !== " "){
      if(sillyCase){
        char = char.toUpperCase()
      }else{
        char = char.toLowerCase()
      }
      sillyCase = !sillyCase 
    }
     newStr += char
    
  }return newStr
  }


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
