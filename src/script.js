// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

class User {
  #age; // Private field
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  greet() {
    return (
      "Hello, my name is " +
      this.name +
      " and I am " +
      this.#age +
      " years old."
    );
  }
}

class Customer extends User {
  greet() {
    return "Hello " + this.name; // Accessing the public field from User class
  }
}

const user = new User("Phone Nyo", 20);
const user2 = new User("Sithu", 21);

const customer = new Customer("Phone Nyo", 20);

btn.onclick = () => {
  p.innerText = user.greet(); // Hello, my name is Phone Nyo
  p2.innerText = customer.greet(); // Phone Nyo
};
