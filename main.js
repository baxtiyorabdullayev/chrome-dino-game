"use strict";

const up = document.querySelector(".up");
const down = document.querySelector(".down");
const dragon = document.querySelector(".dragon");
const tree = document.querySelector(".tree");

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
