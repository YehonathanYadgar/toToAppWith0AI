
const AddTaskButton = document.getElementById('AddTaskButton');
const TaskText = document.getElementById('TaskText');

const TaskList = document.getElementById('TaskList');

AddTaskButton.onclick = function() {
    const Text = TaskText.value.trim();
    if (Text === "") return;

    const NewListItem = document.createElement('li');
    NewListItem.textContent = Text;

    TaskList.appendChild(NewListItem);
    TaskText.value = "";
};