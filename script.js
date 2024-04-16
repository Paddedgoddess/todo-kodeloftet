
//checks if button is clicked
function addTodo() {
    event.preventDefault();
    console.log("Is button clicked?");

//const er å erklære en variabel
// taskInputData er et variabel navn
//= å erklære en verdi som skal lagres
// document referer til HTML dokument
//.queryselector() henter noe fra HTML
// .value er at vi henter innholdet til elementet
// ; betyr full stopp. denne linjen med kode er ferdig


//fetches text from textbox into java
    const inputTaskData = document.querySelector("#inputTask").value;
    console.log(inputTaskData);

//fetches list element
    const newListItem = document.createElement("li");
    console.log(newListItem);

//
    newListItem.textContent = inputTaskData;

//
    const listTask = document.querySelector("#listTask");
    console.log(listTask);

//
    listTask.appendChild(newListItem);
    console.log(listTask)
}


const buttonTask = document.querySelector("#buttonTask");
console.log(buttonTask);

buttonTask.addEventListener("click", addTodo);
