
import '../styles/TodoFilter.css'

function TodoFilter(){
    return (
        <ul className='filters'>
            <li>All</li>
            <li>Completed</li>
            <li>Pending</li>
        </ul>
    );
}

export {TodoFilter}