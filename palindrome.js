function isPalindromeForCase(word) {
    
    const len = word.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
       // console.log(i,word[i],word[len - 1 - i]);
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function isPalindromeAsReverse(word) {
    
    const reversedWord = word.split('').reverse().join(''); // Reverse the word
    return word === reversedWord; // Compare original word with reversed word
}

const wordList = ["kayak", "hello", "level", "madam", "world"];

for (const word of wordList) {
    const result = isPalindromeAsReverse(word);
    if (result) {
        console.log(`${word} es un palíndromo.`);
    } else {
        console.log(`${word} no es un palíndromo.`);
    }
}
