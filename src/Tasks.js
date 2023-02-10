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
                            <button onClick={() => props.deleteTask(task.key)}><FontAwesomeIcon icon={faTrash} /></button>
                            <button onClick={() => props.completeTask(task.key)}><FontAwesomeIcon icon={faCheck} /></button>
                            {/* TODO: set tag into state so it can be saved in firebase */}
                            <select
                                defaultValue={""}
                                required={true}>
                                <option value="" disabled >tag</option>
                                <option value="work" id="work">work</option>
                                <option value="school" id="school">school</option>
                                <option value="home" id="home">home</option>
                                <option value="social" id="social">social</option>
                                <option value="other" id="other">other</option>
                            </select>
                        </li>
                    )
                })
                }
            </ul >
        </div>
    )
}

export default Tasks;