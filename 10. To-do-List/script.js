//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks.

let taskInput = document.getElementById("new-task"); // new-task
let addButton = document.getElementsByTagName("button")[0];//first button
let incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
let completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List item

let createNewTaskElement = function(taskString) {
	// create List Item
  let listItem = document.createElement("li");
  // input checkbox
  let checkBox = document.createElement("input");
  // label
  let label = document.createElement("label");
  // input (text)
  let editInput = document.createElement("input");
  // button.edit
  let editButton = document.createElement("button");
  // button.delete
  let deleteButton = document.createElement("button");
  
  //Each element needs modified 
  
  checkBox.type = "checkBox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

	return listItem;
}


//Add a new task
let addTask = function() {
  console.log("Add Task...");
  //Create a new list item with the text from the #new-task:
  let listItem = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
}

//Edit an existing task
let editTask = function() {
    console.log("Edit Task...");
  
let listItem = this.parentNode;
  
let editInput = listItem.querySelector("input[type=text]");
let label = listItem.querySelector("label");
  
let containsClass = listItem.classList.contains("editMode");
  
  
  // if class of the parent is .editMode
  if (containsClass) {
      //Switch from .editMode
      //label text become the input's value
      label.innerText = editInput.value;
  } else {
      //Switch to .editMode
      //input value becomes the labels text
     	editInput.value = label.innerText;
  }
  //Toggle .editMode on the parent 
  listItem.classList.toggle("editMode");
}

//Delete an existing task
let deleteTask = function () {
    console.log("Delete Task...");
		//Remove the parent list item from the ul
  	let listItem = this.parentNode;
  	let ul = listItem.parentNode;
  
  	ul.removeChild(listItem);
}

//Mark a task as complete
let taskCompleted = function() {
   console.log("Task Complete...");
  //When the Checkbox is checked 
  //Append the task list item to the #completed-tasks ul
   let listItem = this.parentNode;
   completedTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem, taskIncomplete);
}


//Mark a task as incomplete
let taskIncomplete = function() {
  console.log("Task Incomplete...");
 	//When the checkbox is unchecked appendTo #incomplete-tasks
  let listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}


//Set the click handler to the addTask function
addButton.addEventListener("click", addTask); 


let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  	console.log("Bind List item events");
  	// select listitems chidlren
  	let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
  	editButton.onclick = editTask;
		//bind deleteTask to delete button
 		deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
  	checkBox.onchange = checkBoxEventHandler;
  
}

//cycle over incompleteTaskHolder ul list items
for (let i = 0; i < incompleteTasksHolder.children.length; i ++) {
  //bind events to list item's children (taskCompleted)	
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i ++) {
  //bind events to list item's children (taskCompleted)	
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}


  
  
  
  
  
  
  
  