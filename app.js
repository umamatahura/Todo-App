// selectors

const form = document.querySelector(".new-task-form");
const task_input = document.getElementById("new-task-input");
const taskLists = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
    // To avoid Browser Refresh
    event.preventDefault();

    if (task_input.value) {
        const task = task_input.value;
        console.log(task);

        // Creating the Task Div
        const task_el = document.createElement("div");
        task_el.classList.add("task")

        // inserting task element div to tasks div
        taskLists.appendChild(task_el);

        // Creating Content div
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        // Inserting content Div to Task
        task_el.appendChild(task_content_el);

        // Creating Input(Task)
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        // Inserting Input to Content Div
        task_content_el.appendChild(task_input_el);

        // Creating actions div
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        // Inserting Actions Div to Content Div
        task_content_el.appendChild(task_actions_el);

        // Creating Edit Button
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";

        // Creating Delete Button
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "Delete";

        // Creating Complete Button
        const task_complete_el = document.createElement('button');
        task_complete_el.classList.add("complete");
        task_complete_el.innerText = "Mark Complete";

        // Adding all Button to Actions Div 
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_complete_el);

        // Clear the Input Field
        task_input.value = "";

        // Edit btn
        task_edit_el.addEventListener("click", function () {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        // complete btn
        task_complete_el.addEventListener("click", function () {
            if (task_complete_el.innerText.toLowerCase() === "mark complete") {
                task_complete_el.innerText = "Completed";
                task_input_el.classList.add("mark-completed");
                task_complete_el.style.backgroundColor = "black";
            } else {
                task_complete_el.innerText = "Mark Complete";
                task_input_el.classList.remove("mark-completed");
                task_complete_el.style.backgroundColor = "rgb(3, 56, 3)";
            }
        });

        // // Delete btn
        task_delete_el.addEventListener("click", function (e) {
            taskLists.removeChild(task_el);
        })

    } else {
        alert("Enter some Task");
    }
});