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