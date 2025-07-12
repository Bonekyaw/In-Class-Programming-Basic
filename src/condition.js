// https://github.com/Bonekyaw/In-Class-Programming-Basic

const p = document.getElementById("para");
const p2 = document.getElementById("num");
const btn = document.getElementById("btn");

btn.onclick = () => {
  if (p.style.color !== "gold") {
    p.style.color = "gold";
  } else {
    p.style.color = "red";
  }

  //   switch (p.style.color) {
  //     case "gold":
  //       p.style.color = "red";
  //       break;
  //     case "red":
  //       p.style.color = "gold";
  //       break;
  //     default:
  //       p.style.color = "gold";
  //       break;
  //   }
};
