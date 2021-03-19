let tareas = [];
let turno = true;


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
        this.resetForm();

    }

    randomPick(){
        let x = Math.floor(Math.random() * tareas.length);
        return x
    }

    randomTask(rp, tareas, setElement){
        const allTaskList = document.getElementById(setElement);
        const element = document.createElement("A");
        element.setAttribute('class','list-group-item list-group-item-action list-group-item-dark')
        const textnode = document.createTextNode(tareas[rp]);
        element.appendChild(textnode);
        allTaskList.appendChild(element);
        tareas.splice(rp,1)

    }

    removeTask(){

    }

    resetForm(){
        document.getElementById('tasks-form').reset();
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


document.getElementById('tasks-pick')
.addEventListener('submit', function(e){
    const ui = new UI();
    const rp =  ui.randomPick();
    if (tareas.length > 0 && turno == true){
        ui.randomTask(rp, tareas, "task-list-p1");
        turno = false;
    } else if(tareas.length > 0 && turno == false){
        ui.randomTask(rp, tareas, "task-list-p2");
        turno = true;
    }
    e.preventDefault();
});

