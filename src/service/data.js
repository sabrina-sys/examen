let tasks = ["tarea 1", "tarea 2", "tarea 3"];

const task = {
    getTasks : () => {
        return tasks;
    },
    setOneTask : (taskSelect) => {
        tasks.push(taskSelect);
    },
    removeTask : (taskSelect) => {
        tasks = tasks.filter(task => task !== taskSelect);
    },
    updateTask : (taskSelect, newTask) => {
        let index = tasks.indexOf(taskSelect)
        tasks[index] = newTask;
    },
    isExist : (taskSelect) => {
        return tasks.find(task => task === taskSelect)
    }
}

export default task;