let tareas = [];
let turno = true;
let id = 0;


class Task{
    constructor(name){
        this.name = name;
    }
}

class UI{
    constructor(){
    }

    addTask(TN){

        if (TN.name !== ""){
            const allTaskList = document.getElementById('task-list');
            const element = document.createElement("A");
            element.setAttribute('class','list-group-item list-group-item-action list-group-item-dark')
            element.setAttribute('id', id)
            const textnode = document.createTextNode(TN.name);
            element.appendChild(textnode);
            allTaskList.appendChild(element);
            tareas.push(TN.name);
            id++;
            console.log(tareas);
            this.resetForm();
        }
        else{
            console.error("Task name empty")
        }
    }

    randomPick(){
        let x = Math.floor(Math.random() * tareas.length);
        return x
    }

    randomTask(rp, tareas, setElement){
        const allTaskList = document.getElementById(setElement);
        const element = document.createElement("A");
        element.setAttribute('class','list-group-item list-group-item-action list-group-item-dark');
        const textnode = document.createTextNode(tareas[rp]);
        element.appendChild(textnode);
        document.getElementById(rp).remove();
        allTaskList.appendChild(element);
        
        tareas.splice(rp,1);

    }

    removeTask(id){
        document.getElementById(id).remove();
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
    if (tareas.length == 1){
        ui.removeTask("no0");
    }
    e.preventDefault();
});


document.getElementById('tasks-pick')
.addEventListener('submit', function(e){
    const ui = new UI();
    const rp =  ui.randomPick();
    if (tareas.length > 0 && turno == true){
        try {
            ui.removeTask("no1");
          } catch (error) {
            console.error(error);
          }
        ui.randomTask(rp, tareas, "task-list-p1");
        //ui.removeTask(rp)
        turno = false;
    } else if(tareas.length > 0 && turno == false){
        try {
            ui.removeTask("no2");
          } catch (error) {
            console.error(error);
          }
        ui.randomTask(rp, tareas, "task-list-p2");
        //ui.removeTask(rp)
        turno = true;
    }
    e.preventDefault();
});

