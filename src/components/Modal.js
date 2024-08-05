import {useState } from 'react';
import '../styles/Modal.css'

function Modal({isOpen,newTodo}){
    const [todoText, setTodoText] = useState('')
    const [isValidate, setValidate] = useState(true)
    const hadleSumit = (e) => {
        if(todoText){
            newTodo({text:todoText, completed:false})
        } else{
            setValidate(false)
        } 
    }
    return(
        <div className="modal__background">
            <div className="modal__create-todo">
                <textarea value={todoText} onChange={(e) => setTodoText(e.target.value)}placeholder="Type your next todo"/>
                {!isValidate && <p style={{color:"red"}}>Text is required</p>}
                <div className='modal__buttons-container'>
                    <button onClick={() => isOpen(false)}>Cancel</button>
                    <button onClick={hadleSumit}>Create</button>
                </div>
            </div>
        </div>
        );
}

export {Modal}