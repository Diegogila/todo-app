import '../styles/TodoItem.css'
import deleteButton from '../assets/icons/delete.svg'
import completedIcon from '../assets/icons/plus.svg'

function TodoItem({text,completed, deleteTodo, onComplete}){
  return (
    <li className={`todo-item${completed ? " todo-items--completed": ""}`}>
      <span className='todo-button' onClick={() => onComplete(text)}>
        <img src={completedIcon} alt='complete icon'/>
      </span>
      <p>{text}</p>
      <button onClick={() => deleteTodo(text)} className='delete-todo'><img src={deleteButton}/></button>
    </li>
  );
  }

  export {TodoItem}