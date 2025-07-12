// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

function changeText(title) {
  // Parameter
  p.innerText = title;
}

const add = (a, b) => {
  return a + b;
};

btn.onclick = () => {
  changeText("Let's go!");
  //const result = add(2, 3);
  p2.innerText = add(2, 3);
};
