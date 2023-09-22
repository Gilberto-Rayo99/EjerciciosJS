function findShortestWord(words) {
    if (words.length === 0) {
        return null; // Return null for empty array
    }

    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
 
const wordArray = ["apple", "banana", "kiwi", "grape", "pea"];

const shortestWord = findShortestWord(wordArray);
if (shortestWord) {
    console.log("The shortest word is:", shortestWord);
} else {
    console.log("The array is empty.");
}
