function Tasks(props) {

    return (
        <div className="App">
            {props.taskList !== [] ?
                <ul className="taskList">
                    {props.taskList.map(task =>
                        <li key={task.id} className={task.isComplete ? "strikethrough" : "listItem"}>
                            {task.value}
                            <button className="delete" onClick={(e) => props.deleteTask(e, task.id)}>Delete</button>
                            <button onClick={(e) => props.completedTask(e, task.id)}>Completed</button>
                        </li>)}
                </ul>
                : null}
        </div >
    );
}

export default Tasks;