function pickingNumbers(a) {
  let counter = 0;
  let max = 0;
  for (let i of a) {
    console.log(`For iiiiiii de a: ${i} `);
    for (let j of a) {
      console.log(`For j de a: ${j} `);
      if (j - i == 1 || i == j) counter++;
    }
    console.log(`Counter before: ${counter} `);
    if (counter > max) max = counter;
    counter = 0;
    console.log(`counter after: ${counter} `);
    console.log(`MAXXX result: ${max} `);
  }

  return max;
}

const a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a));
