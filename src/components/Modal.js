import {useState } from 'react';
import '../styles/Modal.css'

function Modal({isOpen,todos,createTodo}){
    const [todoText, setTodoText] = useState('')  
    
    return(
        <div className="modal__background">
            <div className="modal__create-todo">
                <textarea onChange={(e) => setTodoText(e.target.value)}placeholder="Type your next todo"/>
                <div className='modal__buttons-container'>
                    <button onClick={() => isOpen(false)}>Cancel</button>
                    <button onClick={() => {
                        createTodo([...todos,{text:todoText, completed:false}])
                        isOpen(false)
                    }}>Create</button>

                </div>
            </div>
        </div>
        );
}

export {Modal}