import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React, { useState } from 'react';
import './styles/App.css'
import { TodoFilter } from './components/TodoFilter';
import { Modal } from './components/Modal';
import {useLocalStorage} from './utils/useLocaleStorage'
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';


function App() {
  const {item : todos, saveItem : setTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTarget, setSearchTarget] = useState('');
  //Count states
  let completedTodos = todos.filter((todo) => !!todo.completed).length;
  let totalTodos = todos.length; 
  
  //Filter Hook logic
  const useFilterTodos = (fil) => {
    const [filter, setFilter] = useState(fil);
    let filteredTodos;
    switch (filter) {
      case 'completed':
        filteredTodos = todos.filter(todo => todo.completed);
        break;
      case 'pending':
        filteredTodos = todos.filter(todo => !todo.completed);
        break;
      default:
        filteredTodos = todos;
        break;
    }
    return [filter ,filteredTodos, setFilter];
  }

  const [filter ,filteredTodos, setFilter] = useFilterTodos('all');
  
  //Search logic
  const searchedTodos = filteredTodos.filter((todo) => todo.text.toLowerCase().includes(searchTarget.toLocaleLowerCase()))

  //Create a new todo from modal block
  const createTodoFunc = (newTodo) => {
    setTodos([...todos,newTodo])
    setModalIsOpen(false)
  }


  const deleteTodo = (key) => {
    const currentTodosAlive = todos.filter((todo) => todo.text !== key);
    setTodos(currentTodosAlive);
  }

  const completeTodoToggle = (key) => {
    const newTodos = [...todos]
    const todoIntex = newTodos.findIndex((todo) => todo.text === key);
    newTodos[todoIntex].completed = newTodos[todoIntex].completed ? false : true;
    setTodos(newTodos)
  }


  return (
    <main className='app-container'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchTarget={setSearchTarget}/>
      {modalIsOpen && <Modal isOpen={setModalIsOpen} newTodo={createTodoFunc}/>}
      <TodoFilter filter={filter} setFilter={setFilter}/>
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <p>Error</p>}
        {!loading && searchedTodos.length === 0 && filter=== 'all' && <p>Create your first TODO!!</p>}
        {searchedTodos.map((todo) => <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodoToggle(todo.text)}
        deleteTodo={() => deleteTodo(todo.text)}
        />)}
      </TodoList>
      <CreateTodoButton todos={todos} openModal={setModalIsOpen}/>

    </main>
  );
}




export default App;
