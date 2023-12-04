"use strict";
function changeJustifyContent(value) {
  const container = document.querySelector(".container");
  container.style.justifyContent = value;
  console.log("container", container);
  console.log("container.style.justifyContent", container.style.justifyContent);
}

function changeAlignItemsContent(value) {
  const container = document.querySelector(".row-wrapper");
  container.style.alignItems = value;
}

function changeOrder(value) {
  const container = document.querySelector("#flex-direction");
  container.style.flexDirection = value;
  if (value === "column" || value === "column-reverse") {
    container.classList.add("column");
  } else {
    container.classList.remove("column");
  }
}
