import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function Tasks(props) {

    return (
        <div className="App">
            <div className="taskList">
                {props.taskList !== [] ?
                    <ul>
                        {props.taskList.map(task =>
                            <li key={task.id} className={task.isComplete ? "strikethrough" : "listItem"}>
                                {task.value}
                                <button className="completed" onClick={(e) => props.completedTask(e, task.id)}><FontAwesomeIcon icon={faCheck} /></button>
                                <button onClick={(e) => props.deleteTask(e, task.id)}><FontAwesomeIcon icon={faTrash} /></button>
                            </li>)}
                    </ul>
                    : null}
            </div >
        </div>
    );
}

export default Tasks;