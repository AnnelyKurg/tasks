//event elements
const form = document.querySelector("form");
const taskList = document.querySelector(".collection");
const deleteTasksBtn = document.querySelector("#delete-tasks");

//events
// selectors ei ole vaja kirjutada. Sulud, jutumärk FORM ja tuleb selectors automaatselt.
form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
deleteTasksBtn.addEventListener("click", deleteTasks);

function deleteTasks() {
    //event.target.previousElementSibling.innerHTML = "";
    //taskList.innerHTML = ``;
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function deleteTask(event) {
    if(event.target.textContent === "X") {
        if(confirm("Do you want to delete this task?")) {
            event.target.parentElement.remove();
        }
    }
}

function addTask(event) {
    //event = e Ei pea pikalt välja kirjutama
    const taskInput = document.querySelector("#task");
    let task = taskInput.value;
    //create li element
    const li = document.createElement("li");
    //add scc class
    li.className = "collection-item";
    //create txt element
    const text = document.createTextNode(task);
    //add txt to li item
    li.appendChild(text);
    //create a element
    const link = document.createElement("a");
    //add css class
    link.className = "secondary-content";
    //set href atribute to a
    link.setAttribute("href", "#");
    //add text content to a
    link.appendChild(document.createTextNode("X"));
    //add a to li
    li.appendChild(link);
    //add li item to ul
    const ul = document.querySelector(".collection");
    ul.appendChild(li);
    //save task


    addTaskToLocalStorage(task);

    //rea tühjaks tegemine peale taski lisamist
    taskInput.value = "";

    event.preventDefault();
}

function addTaskToLocalStorage(task) {
       //salvesta taskid
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    console.log(tasks);
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);

}

//console.log(form)