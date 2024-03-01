import React from 'react'
import "./HabitShow.css";
function HabitShow({prop,index,deleteHabit}) {
  return (
    <div className='habitList'>
      <tr key={index}>
              <td>{prop.action}</td>
              <td>{prop.motivation}</td>
              <td>{prop.environment}</td>
              <td>{prop.date}</td>
              <td><button onClick={() => deleteHabit(index)}>Delete</button></td>
            </tr>
    </div>
  )
}

export default HabitShow
