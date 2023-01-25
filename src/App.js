import './App.css';
import Form from './Form';
import TaskCount from './TaskCount';
import Tasks from './Tasks';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("")
  const [displayTask, setDisplayTask] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const taskArray = []

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayTask(input)
    setInput("");
  }

  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskCount />
      <Tasks
        displayTask={displayTask} />
    </div>
  );
}

export default App;
