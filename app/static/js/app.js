
const AddTaskButton = document.getElementById('AddTaskButton');
const TaskText = document.getElementById('TaskText');

const TaskList = document.getElementById('TaskList');

AddTaskButton.onclick = function() {
    const Text = TaskText.value.trim();
    if (Text === "") return;

    const NewListItem = document.createElement('li');  
    NewListItem.textContent = Text;

    // Create a delete button
    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = "Delete";
    DeleteButton.onclick = function() {
        TaskList.removeChild(NewListItem);
    };

    // Add the delete button to the list item
    NewListItem.appendChild(DeleteButton);

    // Add the new list item to the task list
    TaskList.appendChild(NewListItem);

    TaskText.value = "";
};