//This function gets the task from input
function get_todos() {
    //Create an array of tasks that are inputed
    var todos = new Array;
    //pull the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //if the input is not null then JSON.parse will communicate with the web browser to make the task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputed task to the get_todos function array
function add() {
    //Take the inputed task and create a variable of it
    var task = document.getElementById("task").value;
    var todos = get_todos();
    //This adds a new task at the end of the array
    todos.push(task);
    //Convert the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//This function keeps the tasks permanently displayed on the screen
function show() {
    //Set the task that was retrieved as a variable
    var todos = get_todos();
    //set up each task as an unordered list
    var html = '<ul>';
    //display a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        //this also displays the task as a list and create the button with the X
        html += '<li>' + todos[i] + '  <button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //display the task as a list
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

//Display the inputed task when the 'add item' button is clicked
document.getElementById('add').addEventListener('click', add);
//keep the inputs displayed permanently on the screen
show();