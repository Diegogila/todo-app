import '../styles/TodoList.css'

function TodoList({children}){
    return (
      <ul className="todos-container">
        {children}
      </ul>
    );
  }

  
  export { TodoList };