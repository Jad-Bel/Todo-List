document.getElementById('addTodoTask').addEventListener("click", function () {
    let taskInput = document.getElementById('todoInput');
    let taskContent = taskInput.value.trim();

    if (taskContent !== "") { //to check if the input in sot empty
        let newTask = document.createElement('li');
        newTask.textContent = taskContent;
        newTask.className = 'p-2 bg-gray-100 rounded mb-2'; //styling the style ticket

        document.getElementById('todoList').appendChild(newTask);
        taskInput.value = ""; //clear the inout after submiting the task to re-write another task
    }
});

document.getElementById('addDoingTask').addEventListener("click", function () {
    let taskInput = document.getElementById('doingInput');
    let taskContent = taskInput.value.trim();

    if (taskContent !== "") { 
        let newTask = document.createElement('li');
        newTask.textContent = taskContent;
        newTask.className = 'p-2 bg-gray-100 rounded mb-2';

        document.getElementById('doingList').appendChild(newTask);
        taskInput.value = ""; 
    }
});

document.getElementById('addDoneTask').addEventListener("click", function () {
    let taskInput = document.getElementById('doneInput');
    let taskContent = taskInput.value.trim();

    if (taskContent !== "") { 
        let newTask = document.createElement('li');
        newTask.textContent = taskContent;
        newTask.className = 'p-2 bg-gray-100 rounded mb-2';
        document.getElementById('doneList').appendChild(newTask);
        taskInput.value = "";
    }
});
