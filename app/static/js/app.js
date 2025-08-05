
const AddTaskButton = document.getElementById('AddTaskButton');
const TaskText = document.getElementById('TaskText');

const TaskList = document.getElementById('TaskList');

AddTaskButton.onclick = function() {
    
    const Text = TaskText.value.trim();
    if (Text === "") return;

    const NewListItem = document.createElement('li');  
    const TextArea = document.createElement('span');  
    
    NewListItem.appendChild(TextArea)


    TextArea.textContent = Text;

    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = "Delete";
    DeleteButton.id = "DeleteTaskButton";

    const EditButton = document.createElement('button');
    EditButton.textContent = "Edit";

    EditButton.onclick = function() {
        NewTaskText = prompt("Please enter the new task");
        NewTaskText = NewTaskText.trim()
        TextArea.textContent = NewTaskText;
    };

    DeleteButton.onclick = function() {
        TaskList.removeChild(NewListItem);
    };

    NewListItem.appendChild(DeleteButton);
    NewListItem.appendChild(EditButton);

    TaskList.appendChild(NewListItem);

    TaskText.value = "";
};