
import { useRef } from 'react'
import '../styles/TodoFilter.css'

function TodoFilter({filter}){
    const buttonRef = useRef(null)

    const handleClick = (ref) => {
        console.log(ref.current)
    }
    return (
        <ul className='filters'>
            <li ref={buttonRef} onClick={() => handleClick(buttonRef)}>All</li>
            <li ref={buttonRef} onClick={() => handleClick(buttonRef)}>Completed</li>
            <li ref={buttonRef} onClick={() => handleClick(buttonRef)}>Pending</li>
        </ul>
    );
}

export {TodoFilter}