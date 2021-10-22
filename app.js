//event elements
const form = document.querySelector("form");
//events
// selectors ei ole vaja kirjutada. Sulud, jutumärk FORM ja tuleb selectors automaatselt.
form.addEventListener("submit", addTask);

function addTask(event){
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
    //add li item to ul
    const ul = document.querySelector(".collection");
    ul.appendChild(li);

    event.preventDefault();

}

//console.log(form)