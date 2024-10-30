let taskCounter = 1;

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
    document.getElementById('modalTastStatus').value = "P1";
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
        <div class="">
            <h3 class="font-semibold text-center pr-2">${taskTitle}</h3>
            <div>
                <p class="text-left pr-2">${taskDescription}</p>
                <p class="text-left pr-2"><strong>Date:</strong> ${taskDate}</p>
                <p class="text-left pr-2"><strong>Status:</strong> ${taskStatus}</p>
            </div>
            <div class="flex justify-end">
                <span class="icon-[proicons--pencil]  mr-2 mb-2 cursor-pointer"></span>
            </div>
        </div>
        `;

        taskCounter++;

        let taskList;
        if(taskType === "todo") {
            taskList = document.getElementById('todoList').appendChild(newTask);
        } else if (taskType === "doing") {
            taskList = document.getElementById('doingList').appendChild(newTask);
        } else if (taskType === "Done"){
            taskList = document.getElementById('doneList').appendChild(newTask);
        }

        if (taskStatus === "P1") {
            taskList.prepend(newTask);
        } else {
            taskList.appendChild(newTask);
        }

        document.getElementById('modalTaskTitle').value = "";
        document.getElementById('modalTaskDescription').value = "";
        document.getElementById('modalTaskDate').value = "";
        document.getElementById('modalTaskStatus').value = "P1";
        document.getElementById('modalTaskType').value = "todo";

        document.getElementById('modal').style.display = 'none'; 
    }
});
