
import '../styles/TodoFilter.css'

function TodoFilter({filter,setFilter}){
    return (
        <ul className='filters'>
            <li className={filter === 'all'? 'active': ''} onClick={() => setFilter('all')}>All <span></span></li>
            <li className={filter === 'completed'? 'active': ''} onClick={() => setFilter('completed')}>Completed<span></span></li>
            <li className={filter === 'pending'? 'active': ''} onClick={() => setFilter('pending')}>Pending<span></span></li>
        </ul>
    );
}

export {TodoFilter}