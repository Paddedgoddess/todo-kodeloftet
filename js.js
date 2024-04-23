const fruitBowl = ["Banana", "Orange", "Apple"];
console.log(fruitBowl);
console.log(fruitBowl[0]);
console.log(fruitBowl[1]);
console.log(fruitBowl[2]);

// for loop that loops through array
for (
    // new variable called "index" that saves the number 0
    let index = 0;
    // checks if "index" is smaller than the length of our fruitbowl
    index < fruitBowl.length;
    // reassign a new value to index
    index = index + 1
     ) {
    console.log(fruitBowl[index]);
    break;
     };

   //  for ( let i =0; i < fruitBowl.length; i++) {}
    