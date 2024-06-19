import '../styles/TodoItem.css'
import deleteButton from '../assets/icons/delete.svg'
import completedIcon from '../assets/icons/plus.svg'
import { useState } from 'react';

function TodoItem({text}){
  const [completed, setCompleted] = useState({buttonStyle:''})
  const handleClick = () => {

  }
    return (
      <li className='todo-item'>
        <button className='todo-button todo-completed '>
          <img src={completedIcon}/>
        </button>
        <p>{text}</p>
        <button className='delete-todo'><img src={deleteButton}/></button>
      </li>
    );
  }

  export {TodoItem}