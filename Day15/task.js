const employees=[
    {
        name:"John",
        tasks:[
            {Title:"task1" ,completed:true},
            {Title:"task2" ,completed:false}
        ]
    },
    {
        name:"Jane",
        tasks:[
            {Title:"task1" ,completed:true},
            {Title:"task2" ,completed:true}
        ]
    },
]
let compleletionrate=0;
let top= 0;
for(const i of employees){
    let c=0
    const ta = i.tasks.map(t => (t.completed)? c++:c);
    let rate= (c/i.tasks.length)*100;
    i.rate=rate;
    if(compleletionrate<rate){
        compleletionrate=rate;
        top=i
    }
    console.log(i.name,"is completed " ,c ,"task.","and completion rate is",compleletionrate)
    
}
console.log(top.name,"is the employee with high compleltion rate and his rate of completion is ",top.rate)

for(let i of employees){
    const task3={
        Title:"task3" ,completed:true
    }
    i.tasks.push(task3)
}

console.log(employees[0].tasks)
console.log(employees[1].tasks)
console.log("Employees completed all taks:")
for( let i of employees){
    let c=0
    const ta = i.tasks.map(t => (t.completed)? c++:c);
    if(i.tasks.length == c){
        console.log(i.name)
    }
    
}