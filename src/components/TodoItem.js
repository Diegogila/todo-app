import '../styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({text,completed, deleteTodo, onComplete}){
  return (
    <li className={`todo-item ${completed ? "todo-item--completed": ""}`}>
      <CompleteIcon type='check' onComplete={onComplete}/>
      <p>{text}</p>
      <DeleteIcon type='delete' deleteTodo={deleteTodo}/>
 
    </li>
  );
  }

  export {TodoItem}