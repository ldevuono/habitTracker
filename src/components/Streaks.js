import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Streaks = (props) => {
    return (
        <div>
            <ul>
                {props.streaks.map((streak) => {
                    return (
                        <li
                            key={streak.key}>
                            <div className="streakName">
                                <button className="delete" onClick={() => props.deleteStreak(streak.key)}><FontAwesomeIcon icon={faTrash} /></button>
                                <p>{streak.name}</p>
                            </div>
                            <div className="counters">
                                <button className="resetCounter" onClick={() => props.resetCounter(streak.key)}>reset</button>
                                {streak.counter}
                                <button className="increaseCounter" onClick={() => props.increaseCounter(streak.key)}>+</button>
                            </div>

                        </li>
                    )
                })
                }
            </ul >
        </div>
    )
}

export default Streaks;