import '../styles/TodoItem.css'
import deleteButton from '../assets/icons/delete.svg'

function TodoItem({text}){
    return (
      <li className='todo-item'>
        <span>V</span>
        <p>{text}</p>
        <button className='delete-todo'><img src={deleteButton}/></button>
      </li>
    );
  }

  export {TodoItem}