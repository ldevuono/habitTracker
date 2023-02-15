import './App.scss';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, set } from 'firebase/database';
import Streaks from './Streaks';

function App() {
  const [streaks, setStreaks] = useState([]);
  const [input, setInput] = useState("");
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (res) => {
      const newState = [];
      for (let key in res.val()) {
        newState.push({ ...res.val()[key], key: key });
      }
      setStreaks(newState);
    })
  }, [])


  const increaseCounter = (streakId) => {
    const database = getDatabase(firebase);
    const streak = streaks.find((streak) => streak.key === streakId);
    if (streak) {
      const streakRef = ref(database, `/${streakId}`);
      set(streakRef, { ...streak, counter: streak.counter + 1 });
    }
  };

  const resetCounter = (streakId) => {
    const database = getDatabase(firebase);
    const streak = streaks.find((streak) => streak.key === streakId);
    if (streak && streak.counter > 0) {
      const streakRef = ref(database, `/${streakId}`);
      set(streakRef, { ...streak, counter: 0 });
      alert("Better luck next time!")
    }
  };


  const handleChange = (e) => {
    setInput(e.target.value);
  }


  const addStreak = (e) => {
    e.preventDefault();
    if (input !== "" && input !== " ") {
      const database = getDatabase(firebase);
      const dbRef = ref(database);
      push(dbRef, { name: input, counter: 0 });
    } else {
      alert("please add a streak")
    }
    setInput("");
  }

  const deleteStreak = (streakId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${streakId}`);
    remove(dbRef);
  }

  return (
    <main>
      <header>
        <h1>Streak Tracker</h1>
      </header>
      <Form
        input={input}
        handleChange={handleChange}
        addStreak={addStreak}
      />
      <Streaks
        streaks={streaks}
        deleteStreak={deleteStreak}
        increaseCounter={increaseCounter}
        resetCounter={resetCounter}
        counter={counter}
      />
    </main>

  );
}

export default App;
