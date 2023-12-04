"use strict";
function changeJustifyContent(value) {
  const container = document.querySelector(".container");
  container.style.justifyContent = value;
  const buttons = document.querySelectorAll(".nav .flex");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
}

function changeAlignItemsContent(value) {
  const container = document.querySelector(".row-wrapper");
  container.style.alignItems = value;
  const buttons = document.querySelectorAll(".nav .flex");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
}

function changeOrder(value) {
  const container = document.querySelector("#flex-direction");
  container.style.flexDirection = value;
  if (value === "column" || value === "column-reverse") {
    container.classList.add("column");
  } else {
    container.classList.remove("column");
  }
  const buttons = document.querySelectorAll(".nav .flex");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
}
