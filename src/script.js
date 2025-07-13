// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

// Array
const names = ["Phone Nyo", "Sithu", "Tharaphi"]; // names[0]
// Object
const person = {
  name: "Phone Nyo",
  age: 20,
  address: "Yangon",
  isStudent: true,
  hobbies: ["Reading", "Coding", "Gaming"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

btn.onclick = () => {
  // names.push("Naing Naing Lin");
  names.splice(1, 1);

  names.forEach((name) => {
    let p = document.createElement("p"); // <p></p>
    p.innerText = "Hello " + name; // <p>Hello Phone Nyo</p>
    document.body.appendChild(p); // Append to body
  });

  // p.innerText = person.name + " lives in " + person.address;
  p.innerText = `${person.name} lives in ${person.address}`;

  //   for (let index = 0; index < names.length; index++) {
  //     let p = document.createElement("p"); // <p></p>
  //     p.innerText = "Hello " + names[index]; // <p>Hello Phone Nyo</p>
  //     document.body.appendChild(p); // Append to body
  //   }
};
