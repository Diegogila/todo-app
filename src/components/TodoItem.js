import '../styles/TodoItem.css'
import deleteButton from '../assets/icons/delete.svg'
import completedIcon from '../assets/icons/completed.svg'
import { TodoIcon } from './TodoIcon';

function TodoItem({text,completed, deleteTodo, onComplete}){
  return (
    <li className={`todo-item${completed ? " todo-items--completed": ""}`}>
      <TodoIcon type='check'/>
      <span className='icon-check' onClick={() => onComplete(text)}>
        
      </span>
      <p>{text}</p>
      <TodoIcon type='delete'/>
      <button onClick={() => deleteTodo(text)} className='icon-delete'><img src={deleteButton}/></button>
    </li>
  );
  }

  export {TodoItem}