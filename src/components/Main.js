import arrow from '../assets/arrow.png'
import Streaks from './Streaks';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, push, remove, set } from 'firebase/database';
import Swal from "sweetalert2";

const Main = () => {
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
        if (streak.counter === 6) {
            Swal.fire(`Congrats! You've stuck to this habit for a week.`)
        }
    };

    const resetCounter = (streakId) => {
        const database = getDatabase(firebase);
        const streak = streaks.find((streak) => streak.key === streakId);
        if (streak && streak.counter > 0) {
            const streakRef = ref(database, `/${streakId}`);
            set(streakRef, { ...streak, counter: 0 });
            Swal.fire(`Let's start fresh tomorrow.`)
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
            Swal.fire(`Please add a habit.`)
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
                <h1>streak tracker</h1>
                <img src={arrow} alt="An arrow trending upwards—just like your habits"></img>
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
    )
}
export default Main;


