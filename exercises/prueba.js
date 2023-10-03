function maxMin() {
  const s = "12345";
  let min = 1;
  let max = 1;
  s.split("").forEach((i) => {
    max = parseInt(i) > max ? parseInt(i) : max;
    min = parseInt(i) < min ? parseInt(i) : min;
  });
  console.log(min);
  console.log(max);
}

function countEmotions() {
  faces = ":( :( :( >_< :(";
  let sum = 0;
  faces.split(" ").forEach((face) => {
    if (face == "=)" || face == "^_^") {
      sum++;
    }
    if (face == ":(" || face == ">_<") {
      sum--;
    }
  });

  console.log(sum);
}

function ladder() {
  const n = 3; // Augmentation de la valeur de n

  for (let i = 0; i < n; i++) {
    // Combine the horizontal "__" and the vertical "|"
    // The vertical part is added if it's not the first step
    const verticalPart = i !== 0 ? "|" : "";
    console.log(" ".repeat(3 * (n - i - 1)) + "__" + verticalPart);
  }
}
function HexToDex() {
  const h = "FFFFAAA9";
  console.log(
    h
      .split("")
      .map((v) => parseInt(v, 16))
      .reduce((acc, cur) => acc + cur, 0)
  );
}

function replaceCWords() {
  const tweet = "i have the coverage done";
  const ret = tweet.split(" ");

  for (let i = 0; i < ret.length - 1; i++) {
    // Cambiamos el límite a ret.length - 1
    console.log(ret[i]);
    if (ret[i].length > ret[i + 1].length && ret[i][0].toLowerCase() === "c") {
      ret[i] = "covfefe";
    }
  }

  console.log(ret.join(" ")); // Imprimimos el arreglo ret nuevamente como una cadena
}

function rexExps() {
  const SENTENCE = "what's in the?";
  let count = 0;

  for (const sen of SENTENCE) {
    if (/['?!/,.():%]/.test(sen)) {
      count++;
    }
  }

  console.log(count);
}

function contarPalabrasParImpar(cadena) {
  const palabras = cadena.split(" "); // Divide la cadena en palabras
  let resultado = "";

  for (const palabra of palabras) {
    // Elimina caracteres especiales de la palabra y verifica su longitud
    const palabraLimpia = palabra.replace(/[^A-Za-z0-9]/g, "");

    const longitudPar = palabraLimpia.length % 2 === 0;

    resultado += longitudPar ? "0" : "1";
    resultado += palabra.replace(/[A-Za-z0-9]/g, ""); // Añade caracteres especiales nuevamente
    console.log(resultado);
  }

  return resultado;
}
function findAsciiWords() {
  const code =
    "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.---++++++++++++++++----.++++++++++++++..++++++++.++++++++++++++++.------++++++++--------..";
  const memory = new Uint8Array(30000); // Creamos una cinta de memoria de 30,000 celdas
  let pointer = 0; // Inicializamos el puntero de la memoria
  let output = ""; // Inicializamos la salida

  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    switch (char) {
      case "+":
        memory[pointer]++;
        break;
      case "-":
        memory[pointer]--;
        break;
      case ".":
        output += String.fromCodePoint(memory[pointer]);
        break;
    }
  }
  console.log(output);
}

function noRepeatNumbers() {
  const a = 34534782;
  const digits = a.toString();
  const digitsArr = digits.split("");

  // Ordena los cuatro dígitos no repetidos de manera ascendente
  const ascendingDigits = [...new Set(digitsArr)].sort((a, b) => a - b);

  // Filtra los dígitos repetidos (4 iguales) y ordénalos de manera descendente
  const repeatedDigits = digitsArr
    .filter((digit, index, self) => self.indexOf(digit) !== index)
    .sort((a, b) => b - a);

  // Combina los resultados
  const result = ascendingDigits.concat(repeatedDigits);

  console.log(result);
}

function fences() {
  const height = 2;
  const field = ["#.....#....#.....", "..#"];

  for (let i = 0; i < height; i++) {
    let row = field[i];
    
    // Reemplaza "." por "|" antes de "#"
    row = row.replace(/\./g, (match, index) => (row[index - 1] === '#' || row[index + 1] === '#') ? '|' : '.');
    
    console.log(row);
  }
}

fences();

