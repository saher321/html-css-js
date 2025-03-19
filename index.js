const a = [
  {
    name: "áli",
    age: "áli",
    mark: "áli",
    aa: [1, 2, 3, true, "ali"],
  },
  {
    name: "áli",
    age: "áli",
    mark: "áli",
    aa: [1, 2, 3, true, "ali"],
  },
  {
    name: "áli",
    age: "áli",
    mark: "áli",
    aa: [1, 2, 3, true, "ali"],
  },
];

const data = {
  name: "áli",
  age: "áli",
  mark: "áli",
  aa: [1, 2, 3, true, "ali"],
};
let d = 123;

const { name } = data;

console.log(a);
const c = [234, ...a];
console.log(c);

// array
// Object
// spreed operator,
// destructor operator

// || && !
// function add() {
//   if (1 == 1) {
//     console.log("object");
//   } else {
//     console.log("object dfafafa");
//   }
// }

// add();

const da = () => {
  if (1 == 1) {
    console.log("object");
  } else {
    console.log("object dfafafa");
  }
};

da();

{
  da();
}

// function
// arrow function
// condition
// operators
// assignment

const aa = [1, 2, 3, true, "ali"];

// loops
for (i = 0; i < aa.length; i++) {
  console.log(aa[i]);
}

// dom
// bom
// events

const header = document.getElementById("header");
document.getElementById("btn").addEventListener("click", () => {
  header.style.display = "none";
});

function del() {
  header.style.display = "none";
}
