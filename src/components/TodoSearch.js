import '../styles/TodoSearch.css'

function TodoSearch({searchTarget}){ 
  return (
      <input className='todo-search__input'  
        onChange={(event) => {
          searchTarget(event.target.value) 
        }} 
      type="text" placeholder="Cortar Cebolla"/>
    );
  }

  
  export { TodoSearch };