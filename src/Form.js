import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Form(props) {

    return (
        <div className="App">
            <div className="addTask">
                <form action="submit" >
                    <label htmlFor="task" className="sr-only">Add a task</label>
                    <input type="text" id="task" name="task" placeholder="Feed cat" value={props.input} onChange={props.handleChange} />
                    <button onClick={props.addTask}><FontAwesomeIcon icon={faPlus} /></button>
                </form>
            </div>
        </div >
    );
}

export default Form;