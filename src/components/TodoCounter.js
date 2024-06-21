import '../styles/TodoCounter.css'

function TodoCounter({completed, total}){
    return (
      <h1>
        You've completed {completed} of {total} TODOs
      </h1>
    );
  }

  
  export { TodoCounter };