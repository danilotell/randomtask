let tareas = [];

class Task{
    constructor(name){
        this.name = name;
    }
}

class UI{
    constructor(){
    }

    addTask(TN){
        const allTaskList = document.getElementById('task-list');
        const element = document.createElement("A");
        element.setAttribute('class','list-group-item list-group-item-action list-group-item-dark')
        const textnode = document.createTextNode(TN.name);
        element.appendChild(textnode);
        allTaskList.appendChild(element);

        tareas.push(TN.name);
        console.log(tareas);

    }

    removeTask(){

    }
}

//DOM EVENTS

document.getElementById('tasks-form')
.addEventListener('submit', function(e){
    const getTaskName = document.getElementById('inlineFormInputTask').value;
    const newTask = new Task(getTaskName);
    
    const ui = new UI();
    ui.addTask(newTask);

    e.preventDefault();
});

