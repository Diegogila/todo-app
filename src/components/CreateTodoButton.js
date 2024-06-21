import '../styles/CreateTodoButton.css'
import icon from '../assets/icons/add.svg'
function CreateTodoButton({openModal}){
    return (
      <button onClick={() => openModal(true)} className='create-button'><img src={icon}/></button>
    );
  }

export {CreateTodoButton}