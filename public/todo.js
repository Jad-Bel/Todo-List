let taskCounter = {todo: 0, doing: 0, done: 0};

document.getElementById('openModal').addEventListener("click", function () {
    document.getElementById('modal').style.display = 'block';
    clearModalFields();
});

document.getElementById('closeModal').addEventListener("click", function () {
    document.getElementById('modal').style.display = 'none';
});

function clearModalFields() {
    document.getElementById('modalTaskTitle').value = "";
    document.getElementById('modalTaskDescription').value = "";
    document.getElementById('modalTaskDate').value = "";
    document.getElementById('modalTaskStatus').value = "";
    document.getElementById('modalTaskStatus').value = "todo";
    document.getElementById('submitTask').dataset.editing = "false"
}

document.getElementById('submitTask').addEventListener("click", function () {

    let taskTitle = document.getElementById('modalTaskTitle').value.trim();
    let taskDescription = document.getElementById('modalTaskDescription').value.trim();
    let taskDate = document.getElementById('modalTaskDate').value;
    let taskStatus = document.getElementById('modalTaskStatus').value;
    let taskType = document.getElementById('modalTaskType').value;
    let priority = document.getElementById('modalTaskStatus').value;


    if (taskTitle !== "") {
        let newTask = document.createElement('li');
        newTask.className = 'bg-gray-100 rounded-2xl mb-2 p-2  border-2'; 

        if (priority === "P1") {
            newTask.classList.add("border-red-500");
        } else if (priority === "P2") {
            newTask.classList.add("border-orange-500");
        } else if (priority === "P3") {
            newTask.classList.add("border-green-500");
        }


        newTask.innerHTML = `
        <div>
            <h3 class="font-semibold text-center pr-2">${taskTitle}</h3>
        <div>
            <p class="text-left pr-2">${taskDescription}</p>
            <p class="text-left pr-2"><strong>Date:</strong> ${taskDate}</p>
            <p class="text-left pr-2"><strong>Status:</strong> ${taskStatus}</p>
        </div>
        <div class="flex justify-end">
            <button onclick="deleteTask(this)" id="deleteButton" class="text-red-500 pr-2 w-full text-right">
                <span class="icon-[mdi--delete]"></span>
            </button>
        </div>
    </div>
        `;


        let taskList;
        if(taskType === "todo") {
            taskList = document.getElementById('todoList').appendChild(newTask);
            taskCounter.todo++;
        } else if (taskType === "doing") {
            taskList = document.getElementById('doingList').appendChild(newTask);
            taskCounter.doing++;
        } else if (taskType === "Done"){
            taskList = document.getElementById('doneList').appendChild(newTask);
            taskCounter.done++;
        }

        updateTaskCounters();

        document.getElementById('modal').style.display = 'none'; 
    }

    updateTaskCounters();
});

function deleteTask(deleteButton) {
    let taskElement = deleteButton.closest('li');
        taskElement.remove();

        if (taskType === "todo") {
            taskCounter.todo--;
        } else if (taskType === "doing") {
            taskCounter.doing--;
        } else if (taskType === "done") {
            taskCounter.done--;
        }

    updateTaskCounters();
}

function updateTaskCounters () {
    document.getElementById("todoTaskCounter").textContent = taskCounter.todo;
    document.getElementById("doingTaskCounter").textContent = taskCounter.doing;
    document.getElementById("doneTaskCounter").textContent = taskCounter.done;
}

function sortTasks () {
    const priorityOrder = {P1: 1, P2: 2, P3: 3};

    if (newTask.length < 2) {
        return;
    }

    for(let i = 0; i < newTask.length - 1; i++) {
        for (let j = 0; j < newTask.length - i - 1; j++) {
            const currentTask = newTask[j];
            const nextTask = newTask[j + 1];
        }

        if (priorityOrder[currentTask.priority > currentTask.priority]) {
            let temp = newTask[j];
            newTask[j] = newTask[j + 1];
            newTask[j + 1] = temp;
        }

        else if (priorityOrder[currentTask.priority === nextTask.priority]){
            const currentTaskDate = new Date(currentTask.date);
            const nextTaskDate = new Date(nextTask.date);

            if (currentTaskDate > nextTaskDate) {
                let temp = newTask[j];
                newTask[j] = newTask[j + 1];
                temp = newTask[j + 1]
            }
        }
    }
    console.log(currentTask);
}