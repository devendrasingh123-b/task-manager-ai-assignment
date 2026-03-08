// AI-generated, reviewed and modified

function TaskList({ tasks, refresh }) {

  const toggleComplete = async (task) => {

    await fetch(`https://task-manager-ai-assignment-0kdz.onrender.com/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    refresh();
  };

  const deleteTask = async (id) => {

    await fetch(`https://task-manager-ai-assignment-0kdz.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });

    refresh();
  };

  return (
    <div>
      {tasks.map((task) => (
       <div key={task.id} className="task-card">

  <h3>{task.title}</h3>

  <p>Priority: {task.priority}</p>

  <p className="task-status">
    Status: {task.completed ? "Completed" : "Active"}
  </p>

  <div className="action-buttons">

    <button onClick={() => toggleComplete(task)}>
      Toggle
    </button>

    <button
      className="delete-btn"
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>

  </div>

</div>
      ))}
    </div>
  );
}

export default TaskList;