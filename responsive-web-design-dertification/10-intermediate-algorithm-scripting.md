Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.


function sumAll(arr) {
  var newArr = arr.sort(function (a, b) {
    return a - b;
  });
  for (var i=newArr[0]+1; i<newArr[1]; i++) {
    newArr.push(i);
  }
  return newArr.reduce(function (a, b) {
    return a + b;
  });
}

sumAll([6,4]);





Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

["pink wool","diorite"]

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].


function diffArray(arr1, arr2) {

  return arr1.filter(function(value) {
     return arr2.indexOf(value) < 0;
  }).concat(arr2.filter(function(value) {
    return arr1.indexOf(value) < 0;
  }));
}
  

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);





Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"


function convertToRoman(num) {
  var rem = num;
  var rep;
  var roman = "";
  var numerals = [
    {"M": 1000},
    {"CM": 900},
    {"DCCC": 800},
    {"DCC": 700},
    {"DC": 600},
    {"D": 500},
    {"CD": 400},
    {"CCC": 300},
    {"CC": 200},
    {"C": 100},
    {"XC": 90},
    {"LXXX": 80},
    {"LXX": 70},
    {"LX": 60},
    {"L": 50},
    {"XL": 40},
    {"XXX": 30},
    {"XX": 20},
    {"X": 10},
    {"IX": 9},
    {"VIII": 8},
    {"VII": 7},
    {"VI": 6},
    {"V": 5},
    {"IV": 4},
    {"III": 3},
    {"II": 2},
    {"I": 1}
  ];
  
  for (var i in numerals) {
    var key = Object.values(numerals[i]);
    var value = Object.keys(numerals[i]);
    if (num >= key) {
      rem %= key;
      rep = (num - rem)/key;
      num = rem;
      for (var x=0; x<rep; x++) {
        roman += value;
      }
  }
}
 return roman;
}

convertToRoman(2);






Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.prototype.hasOwnProperty()
Object.keys()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var match = false;

  for (var i in collection) {
    if (Object.keys(source).length <= Object.keys(collection[i]).length) {
      for (var x in Object.keys(source)) {
        if ((collection[i].hasOwnProperty(Object.keys(source)[x])) && (collection[i][Object.keys(source)[x]] == Object.values(source)[x])) {
            match = true;
        } else {
            match = false;
        }
      }
    } else if (Object.keys(source).length > Object.keys(collection[i]).length) {
        match = false;
    }
    if (match === true) {
      arr.push(collection[i]);
    }
  } 
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });





Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".


function myReplace(str, before, after) {
  var arr = str.split(" ");
  var inb4 = arr.indexOf(before);
  var inArr = arr[inb4].split("");
  var afArr = after.split("");

  if(inArr[0].toUpperCase() == inArr[0]) {
    afArr[0] = afArr[0].toUpperCase();
    after = afArr.join("");
  }
  arr.splice(inb4, 1, after);
  return arr.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");









Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".


function translatePigLatin(str) {
  var arr = str.split("");
  if (arr[0] === "a" || arr[0] === "e" || arr[0] === "i" || arr[0] === "o" || arr[0] === "u") {
    arr.push("way");
  } else {
    var con = arr.shift();
    if (arr[1] === "a" || arr[1] === "e" || arr[1] === "i" || arr[1] === "o" || arr[1] === "u") {
    con += arr.shift();
  }
    arr.push(con, "ay");
  }
  return arr.join("");
}

translatePigLatin("consonant");





DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


function pairElement(str) {
  var arr = [];
  var inArr = [];
  var stArr = str.split("");
  for (var i in stArr) {
    inArr = [];
    inArr.push(stArr[i]);
    if (stArr[i] === "G") {
      inArr.push("C");
    } else if (stArr[i] === "A") {
      inArr.push("T");
    } else if (stArr[i] === "T") {
      inArr.push("A");
    } else if (stArr[i] === "C") {
      inArr.push("G");
    }
    arr.push(inArr);
  }
  return arr;
}
pairElement("ATCGA");






Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.


function fearNotLetter(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  var stSp = str.split("");
  var alSp = alpha.slice(alpha.indexOf(stSp[0]), alpha.indexOf(stSp[str.length - 1]) + 1);
  for (var i in stSp) {
    if (stSp[i] != alSp[i]) {
      return alSp[i];
    }
  }
  return undefined;
}

fearNotLetter("abcdefghjklmno");





Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

false

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  if (bool === true || bool === false || bool.length < 1) {
    return true;
  } else return false;
}

booWho([1, 2, 3]);




Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

[1,3,2,[5],[4]]

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

function uniteUnique(arr) {
  var newArr = [];
  var reVal = [];
  for (var i in arguments) {
    newArr = newArr.concat(arguments[i]);
  }
  return newArr.reduce(function(thisVal, nextVal, thisIn) {
    if (reVal.indexOf(nextVal) < 0) {
      reVal.push(nextVal);
    }
    return reVal;
  }, 0);
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);






Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.


function convertHTML(str) {
  // &colon;&rpar;
  var listHTML = [{"&": "amp"}, {"<": "lt"}, {">": "gt"}, {'"': "quot"}, {"'": "apos"}];
  var trans;
  var symbol = /&|<|>|"|'/g;
    for (var i in listHTML) {
      for (var x in str.match(symbol)) {
        if (str.match(symbol)[x] in listHTML[i]) {
        trans = listHTML[i][str.match(symbol)[x]];
        str = str.replace(str.match(symbol)[x], '&'+ trans +';');
        }
      }
    }
    
  return str;
}

convertHTML("< chips >");










Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
















