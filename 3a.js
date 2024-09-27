//3a
let tasks = [];// Create an array of strings

//3b
let addTask = (task) => {
    tasks.push(task); // Add the task to the array
    console.log("Task added " + task) // Print insertion message
    return tasks.length; // Return the number of elements in the array
}
//3c
let listAllTasks = ()=> {
    console.log("Current Tasks:");
    tasks.forEach((element) => {
        console.log(element); // Print each task with its index
    });

 }; 

 //3d
 let deleteTask = (task)=> {
    let index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1); // Remove the task from the array
        console.log("Task deleted" + task); // Print deletion message
    } else {
        console.log("Task not found"); // Task not found
    }
    return tasks.length; // Return the number of elements in the array
};

addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask("Work");


