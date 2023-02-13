import './App.scss';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, } from 'firebase/database';
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (res) => {

      const newState = [];
      const data = res.val();

      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }
      setTasks(newState);
    })
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleTagInput = (e) => {
    setTag(e.target.value);
    console.log(tag)
  }

  const addTask = (e) => {
    e.preventDefault();
    if (input !== "" && input !== " ") {
      const database = getDatabase(firebase);
      const dbRef = ref(database);
      push(dbRef, input);
    } else {
      alert("please add a task")
    }
    setInput("");
  }

  const deleteTask = (taskId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${taskId}`);
    remove(dbRef);
  }
  const completeTask = () => {
    console.log("Strike")
    //TODO: strikethrough on click
  }

  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <main>
        <Form
          input={input}
          handleChange={handleChange}
          addTask={addTask}
          handleTagInput={handleTagInput}
        />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          tag={tag}
        />
      </main>
    </div>
  );
}

export default App;
