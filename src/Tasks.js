import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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

                            <div className="counters">
                                <button className="decreaseCounter" onClick={() => props.decreaseCounter()}>-</button>
                                {props.counter}

                                <button className="increaseCounter" onClick={() => props.increaseCounter()}>+</button>
                            </div>
                            <button className="delete" onClick={() => props.deleteTask(task.key)}><FontAwesomeIcon icon={faTrash} /></button>
                        </li>
                    )
                })
                }
            </ul >
        </div>
    )
}

export default Tasks;