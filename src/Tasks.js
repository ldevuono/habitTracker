import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Tasks = (props) => {
    return (
        <div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li
                            key={task.key}>
                            <p>{task.name}</p>
                            <p>{props.tag}</p>
                            <button onClick={() => props.deleteTask(task.key)}><FontAwesomeIcon icon={faTrash} /></button>
                            <button onClick={() => props.completeTask(task.key)}><FontAwesomeIcon icon={faCheck} /></button>
                        </li>
                    )
                })
                }
            </ul >
        </div>
    )
}

export default Tasks;