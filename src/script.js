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

// Array
const names = ["Phone Nyo", "Sithu", "Tharaphi"]; // Array
const numbers = [1, 2, 3, 4, 5]; // Array
const persons = [
  ["Phone Nyo", 20],
  ["Sithu", 21],
  ["Tharaphi", 22],
]; // Array of Arrays

// Object
const user = {
  name: "Phone Nyo",
  age: 20,
  address: "Yangon",
  isStudent: true,
  hobbies: ["Reading", "Coding", "Gaming"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const users = [
  {
    name: "Phone Nyo",
    age: 20,
  },
  {
    name: "Sithu",
    age: 21,
  },
];

btn.onclick = () => {
  // names.forEach((name) => {
  //   let p = document.createElement("p"); // <p></p>
  //   p.innerText = "Hello " + name; // <p>Hello Phone Nyo</p>
  //   document.body.appendChild(p); // Append to body
  // });

  for (let index = 0; index < names.length; index++) {
    let p = document.createElement("p"); // <p></p>
    p.innerText = "Hello " + names[index]; // <p>Hello Phone Nyo</p>
    document.body.appendChild(p); // Append to body
  }

  // if (p.style.color !== "gold") {
  //   p.style.color = "gold";
  // } else {
  //   p.style.color = "red";
  // }

  switch (p.style.color) {
    case "gold":
      p.style.color = "red";
      break;
    case "red":
      p.style.color = "gold";
      break;
    default:
      p.style.color = "gold";
      break;
  }

  // for (let i = 0; i < array.length; index++) {
  //   const element = array[index];

  // }

  changeText("Let's go!");
  //const result = add(2, 3);
  p2.innerText = add(2, 3);
};

// {
//   var count = 1;
// }

// let name2 = "Phone";
// let count = 1;

// let a = 2;
// let b = a;

// btn.onclick = () => {
//   // count = count / 2 ;
//   // count -= 1;
//   // count++;
//   // const abc = (2 + 3) * 4 - 5 / 2;
//   p.style.color = "red";
//   p.style.fontSize = "15px";
//   // p2.innerText = name2 + "456";

//   console.log("a : ", a);
//   console.log("b : ", b);
//   a = 3;
//   console.log("a : ", a);
//   console.log("b : ", b);
// };

// 2 + 3 * 4 - 5 / 2
// 2 + ( 12 ) - ( 2.5 )
// 14 - 2.5
// 11.5
