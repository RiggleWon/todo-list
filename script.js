const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const listItems = document.createElement("div");

function inputLength() {
  return input.value.length;
}
function createListItems() {
  listItems.appendChild(document.createTextNode(input.value));
  listContainer.appendChild(listItems);
  console.log(input.value);
}

btn.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListItems();
  }
});
input.addEventListener("keypress", function (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListItems();
  }
});
