function pairsCount(ar) {
  const count = {};
  var result = 0;
  ar.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
    if (count[number] % 2 === 0) {
      result++;
      count[number] = 0;
    }
  });
  return result;
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(pairsCount(ar));
