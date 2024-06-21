import '../styles/TodoItem.css'
import deleteButton from '../assets/icons/delete.svg'
import completedIcon from '../assets/icons/plus.svg'
import { useState } from 'react';

function TodoItem({text, completed}){
    const [completedFlag, setCompleted] = useState(completed)
    return (
      <li className='todo-item'>
        <button className='todo-button'>
          <img src={completedIcon}/>
        </button>
        <p>{text}</p>
        <button onClick={() => setCompleted(true)} className='delete-todo'><img src={deleteButton}/></button>
      </li>
    );
  }

  export {TodoItem}