// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

// Array
const names = ["Phone Nyo", "Sithu", "Tharaphi"];
const numbers = [1, 2, 3, 4, 5]; // numbers[0]
const mixed = ["Phone Nyo", 20, true, ["sport", "dancing"], undefined]; // mixed[0]

btn.onclick = () => {
  names.forEach((name) => {
    let p = document.createElement("p"); // <p></p>
    p.innerText = "Hello " + name; // <p>Hello Phone Nyo</p>
    document.body.appendChild(p); // Append to body
  });

  //   for (let index = 0; index < names.length; index++) {
  //     let p = document.createElement("p"); // <p></p>
  //     p.innerText = "Hello " + names[index]; // <p>Hello Phone Nyo</p>
  //     document.body.appendChild(p); // Append to body
  //   }
};
