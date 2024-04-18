
//checks if button is clicked
function addTodo() {
    event.preventDefault();
    console.log("Is button clicked?");


//fetches text from textbox into java
    const inputTaskData = document.querySelector("#inputTask").value;
    console.log(inputTaskData);

//fetches list element
    const newListItem = document.createElement("li");
    console.log(newListItem);


const checkbox = document.createElement("input");
checkbox.type = "checkbox";

newListItem.appendChild(checkbox);

    newListItem.appendChild(document.createTextNode(inputTaskData));

    newListItem.classList.add("listTaskItem");
    
    const listTask = document.querySelector("#listTask");
    console.log(listTask);
    listTask.appendChild(newListItem);


//
document.querySelector("#inputTask").value = "";

document.querySelector("#inputTask").focus();
}



function removeCheckedItems() {
    const checkedItems = document.querySelectorAll("#listTask input[type='checkbox']:checked");


    checkedItems.forEach(item => {
        item.parentNode.remove();
    });
}

const buttonTask = document.querySelector("#buttonTask");
buttonTask.addEventListener("click", addTodo);

const buttonRemove = document.querySelector("#removeCheckedItems");
buttonRemove.addEventListener("click", removeCheckedItems);
console.log(addEventListener)
