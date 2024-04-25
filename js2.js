/*
- an event listener listening for a click on a button
- event listener activates a function that runs everytime the button is clicked
- get value data from the HTML input and save it in an array
- loop through the array to make an li-element for each item in the array
-sends the filled li-elements back to the ul-element in HTML

 */

function addTodoTask() {
    event.preventDefault();

//array without content
    const todoTasks = [];

//gets the content value from the input element
    const inputTask = document.querySelector("#inputTask").value;

//fills the array with content from taskinput
    todoTasks.push(inputTask);

    //checks if todo has content
    console.log(todoTasks)

//loops through our array and checks for new data
    for (
       let index = 0;
        index < todoTasks.length;
        index = index + 1
    )
    {
        //gets data from our loop using index to run thriugh whats inside our array
        const newTodoTask = todoTasks[index];

        //create a new html-element "li"
const newListItem = document.createElement("li");
console.log(newListItem);

newListItem.classList.add("taskListItem");

//set that the element "li" have content from our loop through data
newListItem.textContent = newTodoTask;



const buttonRemove = document.createElement("button");
console.log(buttonRemove);

buttonRemove.textContent = "Remove todo";

buttonRemove.addEventListener("click", function () {
    newListItem.remove();
    buttonRemove.remove();
})


//getting the ul-element nested in div from the HTML
const listTaskContainer = document.querySelector("#listTaskContainer");
console.log(listTaskContainer);


// returns the newly created li-element to the ul-element
listTaskContainer.appendChild(newListItem);
listTaskContainer.appendChild(buttonRemove);

    }
}

const buttonTask = document.querySelector("#buttonTask");
console.log(buttonTask);

buttonTask.addEventListener("click", addTodoTask);