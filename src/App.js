import './App.scss';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, set } from 'firebase/database';
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (res) => {
      const newState = [];
      for (let key in res.val()) {
        newState.push({ ...res.val()[key], key: key });
      }
      setTasks(newState);
    })
  }, [])


  const increaseCounter = (taskId) => {
    const database = getDatabase(firebase);
    const task = tasks.find((task) => task.key === taskId);
    if (task) {
      const taskRef = ref(database, `/${taskId}`);
      set(taskRef, { ...task, counter: task.counter + 1 });
    }
  };

  const decreaseCounter = (taskId) => {
    const database = getDatabase(firebase);
    const task = tasks.find((task) => task.key === taskId);
    if (task && task.counter > 0) {
      const taskRef = ref(database, `/${taskId}`);
      set(taskRef, { ...task, counter: task.counter - 1 });
    }
  };


  const handleChange = (e) => {
    setInput(e.target.value);
  }


  const addTask = (e) => {
    e.preventDefault();
    if (input !== "" && input !== " ") {
      const database = getDatabase(firebase);
      const dbRef = ref(database);
      push(dbRef, { name: input, counter: 0 });
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
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
          counter={counter}
        />
      </main>
    </div>
  );
}

export default App;
