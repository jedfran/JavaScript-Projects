// this function ggets the task from input 
function get_todos() {
    // creates an array of task that are inputed
    var todos = new Array;
    // pulls the task that was saved in the web broswer memory
    var todos_str = localStorage.getItem('todo');
    // If the input is not null JSON.parse will communicate with web browser
    //  to make the task a JavaScript object
    if (todos_str !== null) {
        todos =JSON.parse(todos_str);
    }
    return todos;
}

// This function adds the inputed task to get_todos function array
function add() {
    // takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // adds a new task at the end of the array
    todos.push(task);
    // converst task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value= "";
    show();
    
    return false;
}

// This function keeps the task permanetly displayed on the screen 
function show() {
    // sets the task that was retrieves as a variable
    var todos = get_todos();
    
    // sets up each task as an unordered list
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        // also displays the task as a list and creates the button with "X"
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '">x</button></li>';
    };

    html += '</ul>';
    // displays the task as a list
    document.getElementById('todos').innerHTML = html;
}

// Displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// this will help the inputs displayed permantly on the screen
show();

// This creates a function that removes a todo item in the list from the array
function remove() {
    var id= this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // looks in the show() how to display a removed item on the screen
    show();
    
    return false;
}

// Tells browseer how to display the todo array after an item is removed
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};