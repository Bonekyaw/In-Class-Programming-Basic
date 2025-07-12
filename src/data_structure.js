// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

// Array
const names = ["Phone Nyo", "Sithu", "Tharaphi"]; // String Array
const numbers = [1, 2, 3, 4, 5]; // Number Array
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

// Array of Objects
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
  names.forEach((name) => {
    let p = document.createElement("p"); // <p></p>
    p.innerText = "Hello " + name; // <p>Hello Phone Nyo</p>
    document.body.appendChild(p); // Append to body
  });
};
