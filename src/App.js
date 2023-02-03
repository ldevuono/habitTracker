import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if (task !== "" && task !== " ") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000 + 1),
        value: task,
        isComplete: false
      }
      setTaskList([...taskList, taskDetails])
      setTask("");
    } else {
      alert("You haven't entered a task")
    }
  }

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const completedTask = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex(elem => elem.id === id);

    const newTaskList = [...taskList]

    newTaskList[element] = {
      ...newTaskList[element],
      isComplete: true
    }
    setTaskList(newTaskList)
  }

  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <main>
        <Form
          task={task}
          handleChange={handleChange}
          addTask={addTask}
        />
        <Tasks
          taskList={taskList}
          deleteTask={deleteTask}
          completedTask={completedTask}
        />
      </main>
    </div>
  );
}

export default App;
