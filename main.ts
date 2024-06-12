#! /usr/bin/env node
import inquirer from "inquirer";

let todoList:string[] =[]
let condition = true
let main = async () => {
    while(condition){
        let option =await inquirer.prompt([{
            name:"choice",
            type:"list",
            message:"What would you like to do?",
            choices:["Add Task","Delete Task","Update Task","view Todo-List","Exit"]

        }
    ]);
    if (option.choice==="Add Task"){
        await addTask();
    }
    else if (option.choice==="Delete Task"){
        await deleteTask()
    }
    else if(option.choice=== "Update Task"){
        await  updatedTask ()

    }
    else if(option.choice==="view Todo-List"){
        await  viewTask()
    }
    else if (option.choice==="Exit"){
        condition = false;
    }
    }}
    // function to add different task 

let addTask = async () => {
    let newTask = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter your new task:",
      },
      
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todos list`)
}
// function to view all todo list task

let viewTask =  () => {
    console.log("\n your todo list \n ");
    todoList.forEach((task, index) => {
      console.log(`${index+1}. ${task}`);
    });

}
// function to delete task from the list
let deleteTask = async () =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
      {
        name:"index",
        type:"number",
        message:"Enter the index no  of the task you want to delete"
      }
    ]);
    let deletedTask = todoList.splice(taskIndex.index -1, 1);
    console.log(`\n ${deletedTask} task deleted successfully from todos list`);
  }
//   function to update a task
let updatedTask = async()  => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index no  of the task you want to update"
        },
        {
            name:"new_task",
            type:"input",
            message:"Enter the new task"
        }
    ]);
     todoList[ update_task_index .index -1] = update_task_index.new_task 
     console.log(`Task at index no. ${update_task_index.index-1} updated successfully [for updated list check option:"view todo List"]`);
     
}    

main();