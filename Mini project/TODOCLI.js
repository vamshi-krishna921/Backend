import { log } from "console";
import { toNamespacedPath } from "path";
import readline from "readline";
const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//* List of todos
const todos = [];

//* Handle input fn
const handleInput = (option) => {
    if(option == 1){
        rdln.question("Enter the task: ", (task) => {
            todos.push(task);
            log("Task added: ", task);
            showMenu();
        })
    }else if(option == 2){
        log("Your tasks");
        todos.forEach((task, i) => {
            log(`${i+1}. ${task}`);
        })
        log("\n")
        showMenu();
    }else if(option == 3){
        log("Good bye.")
        rdln.close();
    }else {
        log("Invalid input. Please try again.")
        showMenu();
    }
};

//* Menu
const showMenu = () => {
  log("1. Add task");
  log("2. View tasks");
  log("3. Exit");
  rdln.question("Choose an option: ", handleInput);
};

showMenu();
