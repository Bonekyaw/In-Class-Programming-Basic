// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

{
  var count2 = 1;
}

let name2 = "Phone";
let count = 1;

let a = 2;
let b = a;

btn.onclick = () => {
  // count = count / 2 ;
  // count -= 1;
  // count++;
  p.style.color = "red";
  p.style.fontSize = "15px";
  // p2.innerText = name2 + "456";

  console.log("a : ", a);
  console.log("b : ", b);
  a = 3;
  console.log("a : ", a);
  console.log("b : ", b);
  p2.innerText = a;
};
