export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id){
            const date = new Date();

            const updatedTaskList = taskList.map((item) => (
                item.id === task.id ? {id:task.id, name:e.target.task.value, time:`${date.toLocaleTimeString()}:${date.toLocaleDateString()}`} : item));
            setTaskList(updatedTaskList);
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id:date.getTime(),
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()}:${date.toLocaleDateString()}`
            };
            // ...tasklist is for adding the new value in array
            setTaskList([...taskList, newTask]);
           // e.target.task.value = '';
            setTask({});
        }
    }
    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ''}  autoComplete="off" placeholder="add task"
                       maxLength="25" onChange={e => setTask({...task, name:e.target.value})}/>
                <button type="submit">{task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
}