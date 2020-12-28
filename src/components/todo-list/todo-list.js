function todoAddTask() {
    if (tasks == []) {
        mainScreen.style.display = 'none';
        nullScreen.style.display = 'block';
    }
    //add task
}

function todoDeleteTask() {
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