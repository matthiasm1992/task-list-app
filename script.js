const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value;

  if (taskText) {
    showTask(taskText);
    taskInput.value = "";
  }
});

function showTask(task) {
  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
        <li class="task-item">
            <span class="task-text">${task}</span>

            <div class="buttons">
              <button class="edit-btn"><i class="fas fa-edit"></i></button>
              <button class="complete-btn"><i class="fas fa-check"></i></button>
              <button class="delete-btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
        </li>
  `;

  const editBtn = taskItem.querySelector(".edit-btn");
  //   TODO
  editBtn.addEventListener("click", () => {});

  const completeBtn = taskItem.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => {
    const task = taskList
      .querySelector(".task-text")
      .classList.toggle("complete");
  });

  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  taskList.appendChild(taskItem);
}
