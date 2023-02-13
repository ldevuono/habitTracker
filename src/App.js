import './App.scss';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, } from 'firebase/database';
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
      const data = res.val();

      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }
      setTasks(newState);
    })
  }, [])

  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

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

  const deleteTask = (taskId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${taskId}`);
    remove(dbRef);
  }
  // const completeTask = () => {
  //   console.log("Strike")
  //   //TODO: strikethrough on click
  // }

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
          // completeTask={completeTask}
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
          counter={counter}

        />
      </main>
    </div>
  );
}

export default App;
