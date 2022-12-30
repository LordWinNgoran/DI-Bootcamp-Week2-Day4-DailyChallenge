
// Daily Challenge: Words In The Stars

//1 Prompt the user for several words (separated by commas).

let userWord=prompt("Please enter several words (seperated by commas)");
//2 Put the words into an array.

let userArray= userWord.split(",");

let LongestWord=0;
for (let indexUserArray = 0; indexUserArray < userArray.length; indexUserArray++) {
    let lengthWord=userArray[indexUserArray].length;
      if(lengthWord>LongestWord){
          LongestWord=lengthWord;
      }
  
}

console.log(`* `.repeat(LongestWord));
for (let indexUserArray = 0; indexUserArray < userArray.length; indexUserArray++) {
  if(LongestWord>userArray[indexUserArray].length){
    console.log('* '+userArray[indexUserArray]+' '.repeat(LongestWord)+"*");
  }
  else{
    console.log('* '+userArray[indexUserArray]+' '.repeat(LongestWord-4)+"*");
  }
  
}
console.log(`* `.repeat(LongestWord));