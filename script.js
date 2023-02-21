const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listContainer = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListItems() {
  const listItems = document.createElement("li");
  const removeBtn = document.createElement("button");
  listItems.appendChild(document.createTextNode(input.value));
  listContainer.appendChild(listItems);
  input.value = "";
  listItems.setAttribute("class", "list-item");
  removeBtn.appendChild(document.createTextNode("Remove"));
  listItems.appendChild(removeBtn);
  removeBtn.setAttribute("class", "remove-btn selector");
  removeBtn.addEventListener("click", function () {
    removeListItem();
  });
}
function removeListItem() {
  document.querySelector(".list-item").remove();
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

