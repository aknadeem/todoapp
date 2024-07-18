export const ShowTask = ({taskList, setTaskList, task, setTask}) => {
    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        setTask(selectedTask);
    };
    const handleDelete = (id) => {
        const updateTaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(updateTaskList);
        // setTaskList(taskList.filter((task) => task.id !== id));
    };

    return (
        <section className="showTask">
            <div className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </span>
                <span onClick={() => setTaskList([])} className="clearAll">Clear All</span>
            </div>
            <ul>
                {taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}