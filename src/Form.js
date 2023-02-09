import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';


function Form(props) {

    return (
        <div className="App">
            <div className="addTask">
                <form onSubmit={props.addTask} >
                    <label htmlFor="task" className="sr-only">Add a task</label>
                    <input type="text" id="task" name="task" placeholder="Feed cat" value={props.task} onChange={props.handleChange} />
                    <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
                    <button type="button" className="save list"><FontAwesomeIcon icon={faFloppyDisk} /></button>
                </form>

            </div>
        </div >
    );
}

export default Form;