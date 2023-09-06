function pageCount(n, p) {
  if (p <= n / 2) {
    return Math.floor(p / 2);
  } else {
    if (n % 2 === 0) {
      return Math.ceil((n - p) / 2);
    } else {
      return Math.floor((n - p) / 2);
    }
  }
}

let n = 6;
let p = 2;

console.log(pageCount(n, p));
