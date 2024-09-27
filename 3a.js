//3a
let tasks = [];

//3b
let addTask = (task) => {
    tasks.push(task);
    console.log("Task added " + task)
    return tasks.length;
}
//3c
let listAllTasks = ()=> {
    console.log("Current Tasks:");
    tasks.forEach((element) => {
        console.log(element); // Print each task with its index
    });

 }; 


addTask("Work");
listAllTasks();

