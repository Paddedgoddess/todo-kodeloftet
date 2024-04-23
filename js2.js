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
        index = 0;
        index < todoTasks.length;
        index = index + 1
    )
    {
        //gets data from our loop using index to run thriugh whats inside our array
        const newTodoTask = todoTasks[index];

        //create a new html-element "li"
const newListItem = document.createElement("li");
console.log(newListItem);

//set that the element "li" have content from our loop through data
newListItem.textContent = newTodoTask;
    }
}

const buttonTask = document.querySelector("#buttonTask");
console.log(buttonTask);

buttonTask.addEventListener("click", addTodoTask);