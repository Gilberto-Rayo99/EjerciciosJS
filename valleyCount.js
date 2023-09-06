function countingValleys(steps, path) {
  let count = 0, height = 0;
  Array.from(path).map((step) => {
    let prev = height;
    height += step == "U" ? 1 : -1;
    if (prev == 0 && height == -1) count++;
  });
  return count;
}

function AlternativeCode(steps, path) {
  let level = 0,  count = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "U") {
      level++;
      if (level == 0) count++;
    } else level--;
  }
  return count;
}

const steps = 12;
//const path=['U','D','D','D','U','D','U','U'];
const path = ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"];

console.log(countingValleys(steps, path));
