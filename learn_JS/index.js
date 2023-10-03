import { sum, mult, word, points, boolean } from "./exportModules.js";
import addModule from "./exportModules.js";

const user = {
  name: "alejandro",
  age: 30,
  surname: "hernandez",
  email: "kskd@gmail.com",
  address: {
    city: "mexico",
    street: "calzada",
    cp: "3434",
  },
  friends: ["elena", "brandon"],
  active: true,
  sendMail() {
    return "sending Email";
  },
};

const plataformas = {
  ui: "facebook",
  developer: "mark zuckemberg",
};
const lenguajes = {
  name: "python",
  id: "001",
};
//--------------------------------------------DESTRUCTURING-----------------------------------------------//
function destructuring(user) {
  const { name, age } = user;
  console.log(name, age);

  return "<h1>Hola " + name + "</h1>";
}

console.log(destructuring(user));

//--------------------------------------------Funciones Anonimas-----------------------------------------------//
//Example 1
console.log(
  (function () {
    return "Starting...";
  })()
);
//Example 2
const buttonFA = document.createElement("button");
const background = "red";
const color = "white";
buttonFA.style = `background:${background};color:${color}`;
const isAuthorized = 1;
buttonFA.innerText = "click me";
buttonFA.addEventListener("click", function () {
  if (isAuthorized) {
    return alert("autorizado");
  }
  alert("no esta autorizado");
});

document.body.append(buttonFA);

//--------------------------------------------Arrow Functions-----------------------------------------------//

//Example 1
const add = (x, y) => {
  return x + y;
};
console.log(add(1, 1));
//Example 2
buttonFA.addEventListener("click", () => {
  console.log("clicked2");
});

//--------------------------------------------Inline Arrow Functions-----------------------------------------------//

const showText = () => "Hola mundo";
const showArray = () => [1, 2, 3];
const showObject = () => ({ name: "alberto", age: 2 });
console.log(showText(), showArray(), showObject());

//--------------------------------------------Metodos de Arrays-----------------------------------------------//
const names = ["ryan", "joe", "maria"];
//Examples forEach
names.forEach((name) => {
  console.log(name);
});
//Example Map
const newNames = names.map(function (name) {
  return name;
});
console.log(newNames);
//Example Find
const newFound = names.find(function (name) {
  if (name === "ryan") {
    return name;
  }
});
console.log(newFound);
//Example Filter

const newFilter = names.filter(function (name) {
  if (name !== "joe") {
    return name;
  }
});
console.log(newFilter);
//Example Concat
const otherNames = ["lalo", "daniel", "omar"];

console.log(names.concat(otherNames));
//Example Operator Spread(Union de arrays y objetos)
const spreadObjectsUnion = {
  ...plataformas,
  ...lenguajes,
};
console.log([...names, ...otherNames]);
console.log(spreadObjectsUnion);
//--------------------------------------------Exporting Modules-----------------------------------------------//
console.log(sum(), mult(10, 2), word, points, boolean);
console.log(addModule);
//--------------------------------------------Optional Chaining-----------------------------------------------//
console.log(user.location?.city); //Evita errores por si no existe, retorna Undefined

//--------------------------------------------FETCH ASYNC AWAIT-----------------------------------------------//
//FETCH --!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const ul = document.createElement("ul");
/*fetch("https://jsonpLaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    data.forEach(function (post) {
      const li = document.createElement("Li");
      li.innerText = post.title;
      ul.append(li);

      document.body.append(ul);
    });
  }); */

//Same but with ASYNC/AWAIT -!!!!!!!!!!!!!!!!!!!!!!!!!

async function loadData() {
  const response = await fetch("https://jsonpLaceholder.typicode.com/posts");
  const data = await response.json();
  data.forEach(function (post) {
    const li = document.createElement("Li");
    li.innerText = post.title;
    ul.append(li);

    document.body.append(ul);
  });
}
loadData();
