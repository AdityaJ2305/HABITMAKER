import HabitShow from "./HabitShow";
import "./App.css";
import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([]);
  const [action, setAction] = useState("");
  const [motivation, setMotivation] = useState("");
  const [environment, setEnvironment] = useState("");
  const [date, setDate] = useState("");
  const [notask,setnoTask]= useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!action.trim() || !motivation.trim() || !environment.trim() || !date.trim()) {
      alert("Enter Proper Data to Add Task...");
      return;
    }
    setnoTask(false);
    const newHabit = {action,motivation,environment,date}
    setHabits([...habits,newHabit])

    setAction('');
    setMotivation('');
    setEnvironment('');
    setDate('');
  }
  
  const handleDelete = (key) => {
    const updatedHabits = habits.filter((habit,idx) => idx!== key);
    setHabits(updatedHabits);
  };

  const deleteAll=()=>{
    setHabits([])
    setnoTask(true)
  }

  return (
    <div className="main">
    <h1>Habit Maker</h1>
      <form className="form">
        <input
          className="what"
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder="What to do ?"
        />
        <input
          className="why"
          type="text"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Where to do ?"
        />
        <input
          className="where"
          type="text"
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          placeholder="Why to do ?"
        />
        <input
          className="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSubmit} className="save">Submit</button>
        <button onClick={deleteAll} className="clear">Delete All</button>
      </form>
      {notask&&<h2> You have no task </h2>}
      
      {habits.map((habit,idx) => (
          <HabitShow key={idx}
            prop = {habit}
            deleteHabit={() => handleDelete(idx)}
          />
        ))}
    </div>
  );
}

export default App;
