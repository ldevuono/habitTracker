
function Form(props) {
    return (
        <div className="App">
            <div className="addTask">
                <form onSubmit={props.handleSubmit} >
                    <label htmlFor="task">Add a task</label>
                    <input type="text" id="task" name="task" value={props.input} onChange={props.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div >
    );
}

export default Form;