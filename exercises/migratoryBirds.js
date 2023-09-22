function migratoryBirds(arr) {
  const count = {};

  arr.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
    console.log("number: ", number);
    console.log("count: ", count[number]);
  });

  const keys = Object.keys(count);

  console.log(count);
  let minIndex = keys[0];

  for (let i = 1; i < keys.length; i++) {
    const currentIndex = keys[i];
    if (count[currentIndex] > count[minIndex]) {
      minIndex = currentIndex;
    }
  }
  return minIndex;
}
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(migratoryBirds(arr));
