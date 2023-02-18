const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const listItems = document.createElement("div");
const removeBtn = document.createElement("button");

function inputLength() {
  return input.value.length;
}
function createListItems() {
  listItems.appendChild(document.createTextNode(input.value));
  listContainer.appendChild(listItems);
  listItems.setAttributes("class", "list-item");
  removeBtn.appendChild(document.createTextNode("Remove"));
  listContainer.appendChild(removeBtn);
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
