const l = 23;
const s = 'bbaabbaa';
console.error(s);
const sSorted = s.split('').sort();
let r = '';
let a = '';
let b = '';
while (sSorted.length > 1) {
  if (sSorted[0] === sSorted[1]) {
    a += sSorted.shift();
    b += sSorted.shift();
  } else {
    r += sSorted.shift();
  }
  console.error(a, b.split('').reverse().join(''), r, sSorted);
}
console.log(a + (r[0] ? r[0] : '') + b.split('').reverse().join(''));
