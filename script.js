
/****************************Daily Challenge: Words In The Stars***************** */

/**
 * @author: N'GORAN Kouadio Jean Cyrille
 * @description: Words In The Stars
 * @param: initialBottles:Number
 * Date : 30/12/2022
 */


//1 Prompt the user for several words (separated by commas).

let userWord = prompt("Please enter several words (seperated by commas)");
//2 Put the words into an array.

let userArray = userWord.split(",");


// create var for the longest word
let LongestWord = 0;

// inside this loop we search by  loop index the length of each index and compare to LongestWord
for (let indexUserArray = 0; indexUserArray < userArray.length; indexUserArray++) {
  let lengthWord = userArray[indexUserArray].length;


// if the new length is great than LongestWord is become the new LongestWord
  if (lengthWord > LongestWord) {
    LongestWord = lengthWord;
  }

}



// we show line per line 
console.log(`*`.repeat(LongestWord+4));
for (let indexUserArray = 0; indexUserArray < userArray.length; indexUserArray++) {
//3 Console.log the words one per line, in a rectangular frame as seen below.
  if (LongestWord > userArray[indexUserArray].length) {
    console.log('* ' + userArray[indexUserArray] + ' '.repeat(LongestWord-userArray[indexUserArray].length+1) + "*");
  }
  else {
    console.log('* ' + userArray[indexUserArray] + " *");
  }

}
console.log(`*`.repeat(LongestWord+4));