/**
 * Task-1
*/
function add_para() {
    var container1 = document.getElementById("container1");
    var para = document.getElementById("para");
    para.style.display = "Block";
}
/**
 * Task-2
*/
function del_last() {
    var container2 = document.getElementById("container2");
    container2.lastElementChild.remove();
}
/**
 * Task-3
*/
var button = document.getElementById("toggleButton");
var container = document.getElementById("container");

function toggleBox() {
    var box = container.querySelector(".box");

    if (box) {
        box.remove();
    } else {
        var newBox = document.createElement("div");
        newBox.classList.add("box");
        container.appendChild(newBox);
    }
}
button.addEventListener("click", toggleBox);
/**
 * Task-4
*/
var button1 = document.getElementById("changeTextButton");
function changeButtonText() {
    button1.textContent = "You clicked me!";
}
button1.addEventListener("click", changeButtonText);

/**
 * Task-5
*/

var addButton = document.getElementById("addItemButton");
var removeButton = document.getElementById("removeItemButton");
var list = document.getElementById("list");

function addItem() {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item";
    list.appendChild(listItem);
}

function removeItem() {
    const lastItem = list.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
}

addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);