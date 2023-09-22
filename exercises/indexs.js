let burger = '[]:;[]';
burger = burger.slice(burger.indexOf("[]"), burger.lastIndexOf("[]") + 2);

console.log(":(" + " ".repeat(burger.length) + ")");
