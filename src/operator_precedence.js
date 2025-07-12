// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

// let count = 1;

btn.onclick = () => {
  // count = count - 1; // Subtraction operator
  // count -= 1;
  // count--; // Decrement operator
  // count = count + 1; // Addition operator
  // count += 1;
  // count++; // Increment operator
  // count = count / 2 ; // Division operator
  // count = count * 2; // Multiplication operator
  // count *= 2;
  // count /= 2;
  // count = count % 2; // Modulus operator
  // count %= 2;

  // p2.innerText = count;

  const amount = (2 + 3) * 4 - 5 / 2;
  p2.innerText = amount;
};

// Precedence of Operators

// 2 + 3 * 4 - 5 / 2
// 2 + ( 12 ) - ( 2.5 )
// 14 - 2.5
// 11.5
