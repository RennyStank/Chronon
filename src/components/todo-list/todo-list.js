import { addTask, deleteTask, updateTask } from "../../../main-process/tasks"

function todoAddTask() {
    if (tasks == []) {
        mainScreen.style.display = 'none';
        nullScreen.style.display = 'block';
    }
    addTask();
    //add task
}

function todoDeleteTask() {
    deleteTask();
    //delete task
    if (tasks == []) {
        mainScreen.style.display = 'none';
        nullScreen.style.display = 'block';
    }
}

var tasks = [];
var nullScreen = document.getElementById("nullScreen");
var mainScreen = document.getElementById("mainScreen");

document.addEventListener("DOMContentLoaded") = function() {
    if (tasks == []) {

    } else {

    }
}