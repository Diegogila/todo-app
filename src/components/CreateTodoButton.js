import '../styles/CreateTodoButton.css'
import icon from '../assets/icons/add.svg'
function CreateTodoButton(){
    return (
      <button><img src={icon}/></button>
    );
  }

export {CreateTodoButton}