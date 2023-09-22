/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/



function multiplyDigitsAndAddWords(s) {
    // Initialize variables
    let digitProduct = 1;
    let wordCount = 0;
  
    // Split the sentence into words
    const words = s.split(' ');
  
    // Iterate through each word
    for (const word of words) {
      // Check if the word contains digits
      const digits = word.match(/\d/g);
  
      if (digits) {
        // Extract digits and multiply with digitProduct
        for (const digit of digits) {
          digitProduct *= parseInt(digit);
        }
      }
  
      // Increment wordCount
      wordCount++;
    }
  
    // Return the sum of digitProduct and wordCount
    return (digitProduct + wordCount);
  }
  
  const s = '1th1s is sp4rta';
console.log(multiplyDigitsAndAddWords(s));
