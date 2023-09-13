function shortestWord(arr) {
  let shortest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) shortest = arr[i];
  }
  return shortest;
}

function isPalindrom(arr) {
  for (const word of arr) {
    const result = word.split("").reverse().join("");
    let label = "";
    result === word ? (label = "soy palindromo") : (label = "no lo soy xd");
    console.log(label);
  }
}

const arr = ["wevew", "dff"];

isPalindrom(arr);
