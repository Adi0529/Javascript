let tasks = [];
let taskInput = document.getElementById("taskInput");
let nextId = 1;

function addTask() {
    let newTaskText = taskInput.value.trim();
    if (newTaskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    tasks.push({ id: nextId++, text: newTaskText });
    taskInput.value = "";
    render();
}

function render() {
    let list = document.getElementById("taskList");
    list.innerHTML = tasks.map((t) => `
        <div class="d-flex flex-row align-items-center justify-content-between border p-2 mb-2">
            <span>${t.text}</span>
            <div>
                <button class="btn btn-success btn-sm" onclick="updateTask(${t.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${t.id})">Delete</button>
            </div>
        </div>`).join("");
}

function updateTask(id) {
    const newText = prompt("Enter new task text:");
    if (newText === null || newText.trim() === "") return;
    
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.text = newText;
        render();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
}

render();
