tasks= [];

list= document.getElementById("taskList");

function render(){
    list.innerHTML=tasks.map((task,i)=>
    `<div class="d-flex flex-row align-items-center gap-3 mb-2">
    <li>
    ${task}
    </li>
    <button class="btn btn-success" onclick="edittask(${i})">Edit</button>
    <button class="btn btn-danger" onclick="deletetask(${i})">Delete</button>
    </div>`).join("");
}

function Addtask(){
    task= document.getElementById("taskInput");
    newtask=task.value;
    if(newtask.trim() === ""){
        alert("Please enter a task.");
        return;
    }else{
    tasks.push(newtask);
    task.value="";
    render();
    console.log(document.getElementById("taskList"));
    }
}

function deletetask(i){
    tasks.splice(i,1);
    render();
}
function edittask(i){
    newtask= prompt("Edit the task:",tasks[i]);
    if(newtask.trim() === ""){
        alert("Task cannot be empty.");
        return;
    }else{
    tasks[i]=newtask;
    render();
    }
}
