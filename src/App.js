import './App.css';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, update } from 'firebase/database';
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

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

  const completeTask = (taskId) => {
    // const database = getDatabase(firebase);
    // const dbRef = ref(database, `/${taskId}`);
    console.log(taskId)
    // TODO: styled components to style on click?????
    // push(dbRef, { isCompleted: true })
  }

  const deleteTask = (taskId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${taskId}`);
    remove(dbRef);
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
        />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </main>
    </div>
  );
}

export default App;
