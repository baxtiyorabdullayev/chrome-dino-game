"use strict";

let body = document.querySelector("body");

let conteiner = document.createElement("div");
conteiner.className = "container";

let dragon = document.createElement("img");
dragon.src = "./dragon.png";
dragon.className = "dragon";

let tree = document.createElement("img");
tree.src = "./tree.png";
tree.className = "tree";

let bird = document.createElement("img");
bird.src = "./bird.png";
bird.className = "bird";

let up = document.createElement("button");
up.className = "up";
up.textContent = "UP";

let down = document.createElement("button");
down.className = "down";
down.textContent = "DOWN";

function uping() {
  dragon.style.bottom = "1px";
  if (dragon.style.bottom === "1px") {
    for (let i = 1; i <= 120; i++) {
      dragon.style.bottom = `${i}px`;
      console.log(dragon.style.bottom);
    }
  }
}
up.addEventListener("click", uping);

function downing() {
  if (dragon.style.bottom === "120px") {
    for (let i = 60; i >= 1; i--) {
      dragon.style.bottom = `${i}px`;
      console.log(dragon.style.bottom);
    }
  }
}

down.addEventListener("click", downing);

conteiner.appendChild(bird);
conteiner.appendChild(tree);
conteiner.appendChild(dragon);
body.appendChild(conteiner);
body.appendChild(up);
body.appendChild(down);
