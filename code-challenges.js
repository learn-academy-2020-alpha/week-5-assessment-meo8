// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"


/**
* VERSION 1.0
*/

// use a switch for each scenario of vowels (except u)
// iterate through string; try using map
// if letter is one of the 4 vowels, convert it accordingly
// if letter is not one of the 4 vowels, then return it as is and move on

const charConversion = str => {
  // change all the letters to lowercase to ensure matching of the cases
  // must convert string to array to use map by using split()
  // break is optional and used with each case; once the match is found, it'll exit switch
  // if break is omitted, the program continues execution at the next statement
  return str.toLowerCase().split("").map(char => {
    switch (char) {
      case 'a':
        return "4";
      break;
      case 'e':
        return "3";
      break;
      case 'i':
        return "1";
      break;
      case 'o':
        return "0";
      break;
      default:
        return char;
    }
  }).join("");
}

console.log(charConversion(secretCodeWord1));
console.log(charConversion(secretCodeWord2));


/**
  * VERSION 2.0
  */

const charConversionV2 = str => {
  // store each unique key with its corresponding value
  const chars = {"a": 4, "e": 3, "i": 1, "o": 0};
  // replace() looks for a match using regex
  // the anonymous function takes the matching letter and pass it to the chars object to access the value of that specific letter through bracket notation
  // that value then replaces the matched letter thanks to the replace() method :)
  return str.replace(/[aeio]/gi, letter => chars[letter])
}

console.log(charConversionV2(secretCodeWord1));
console.log(charConversionV2(secretCodeWord2));




// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// filter through the array
// lowercase each word
// use indexOf to check if 'a' is within the string
const hasA = arr => {
  return arr.filter(word => word.toLowerCase().indexOf('a') !== -1);
}

// includes return value is either true or false depending if the value is in the string
const includesA = arr => {
  return arr.filter(word => word.toUpperCase().includes('A'));
}

// when using the match() method, the argument passed in must be regex
const matchesA = arr => {
  return arr.filter(word => word.match(/[a]/i));
}

console.log(hasA(arrayOfWords));
console.log(includesA(arrayOfWords));
console.log(matchesA(arrayOfWords));




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

/**
  * VERSION 1.0
  */

const fullHouse = arr => {
  // array to store unique elements
  const temp = [];

  // error check for length
  if (arr.length > 5 ) {
    return "Please return an array with only 5 elements."
  }

  arr.filter(num => {
    // error check for numbers
    if (typeof num !== "number") {
      return "Only numbers allowed."
    }
    // if temp array doesn't include the current num
    // push it to the temp array
    // doesn't add duplicates since the next iteration check for presence in temp
    else if (temp.includes(num) === false) {
      temp.push(num);
    }
  })

  // length of temp is 2 means there are 2 unique numbers within a 5 number array
  // 3,3 & 5,5,5 >> 3 and 5
  return temp.length === 2 ? true : false;
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));


/**
  * VERSION 2.0
  */

// the Set object lets you store unique values of any data type
// it will remove any duplicates
  // example) let tempSet = new Set([1,1,1,2,2,3,3,3,3,3,3])
  // output) tempSet is {1,2,3}
// the spread operator "spreads" the entries from the Set into the array, therefore, effectively converting it back into an array
// another way to convert a Set to an array would be to use the Array.from() method

const fullHouseV2 = arr => {
  return arr.length > 5 ? "Please return an array with only 5 elements."
  : arr = [...new Set(arr)].length === 2 ? true : false;
}

console.log(fullHouseV2(hand1));
console.log(fullHouseV2(hand2));
