let a = ["pny", "nav", "training"];

// console.log(a);

for (i = 0; i < a.length; i++) {
  if (a[i].includes("training")) {
    a[i] = "ttttt";
  }
  console.log(a[i]);
}

console.log(a)

// const data = a.map((item) =>{
//     if(item.includes('pny')){
//         item = item.replace(item,'text')
//     }
//     return item
// });
// console.log(a)
// console.log(data)

function maths(x, y, symbol) {
  if (symbol == "+") {
    return x + y;
  } else if (symbol == "-") {
    return x - y;
  } else if (symbol == "*") {
    return x * y;
  } else if (symbol == "/") {
    return x / y;
  }
}

// console.log(maths(10,10,'*'))
