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
                    {/* <select
                                onChange={props.handleTagInput}
                                value={props.tagInput}
                                defaultValue={""}
                                required={true}>
                                <option value="" disabled >tag</option>
                                <option value="work" id="work">work</option>
                                <option value="school" id="school">school</option>
                                <option value="home" id="home">home</option>
                                <option value="social" id="social">social</option>
                                <option value="other" id="other">other</option>
                            </select> */}
                </form>
            </div>
        </div >
    );
}

export default Form;