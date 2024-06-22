import {useState } from 'react';
import '../styles/Modal.css'

function Modal({isOpen,newTodo}){
    const [todoText, setTodoText] = useState('')  
    
    return(
        <div className="modal__background">
            <div className="modal__create-todo">
                <textarea onChange={(e) => setTodoText(e.target.value)}placeholder="Type your next todo"/>
                <div className='modal__buttons-container'>
                    <button onClick={() => isOpen(false)}>Cancel</button>
                    <button onClick={()=> newTodo({text:todoText, completed:false})}>Create</button>
                </div>
            </div>
        </div>
        );
}

export {Modal}