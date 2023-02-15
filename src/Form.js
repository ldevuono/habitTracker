import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Form(props) {

    return (
        <div className="App">
            <div className="addStreak">
                <form action="submit" >
                    <label htmlFor="streak" className="sr-only">Add a streak to track</label>
                    <input type="text" id="streak" name="streak" placeholder="Do yoga" value={props.input} onChange={props.handleChange} />
                    <button onClick={props.addStreak}><FontAwesomeIcon icon={faPlus} /></button>
                </form>
            </div>
        </div >
    );
}

export default Form;