// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");
// {
//   var count = 1;
// }

// let name2 = "Phone";
// let count = 1;

let a = 2;
let b = a;

btn.onclick = () => {
  // count = count / 2 ;
  // count -= 1;
  // count++;
  // const abc = (2 + 3) * 4 - 5 / 2;
  p.style.color = "red";
  p.style.fontSize = "15px";
  // p2.innerText = name2 + "456";

  console.log("a : ", a);
  console.log("b : ", b);
  a = 3;
  console.log("a : ", a);
  console.log("b : ", b);
};

// 2 + 3 * 4 - 5 / 2
// 2 + ( 12 ) - ( 2.5 )
// 14 - 2.5
// 11.5
