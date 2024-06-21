import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React, { useState } from 'react';
import './styles/App.css'
import { TodoFilter } from './components/TodoFilter';
import { Modal } from './components/Modal';

const defaultTodos = [
  {text:'Cortar cebolla ', completed: false},
  {text:'Bailar Macarena', completed: false},

]


function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchTarget, setSearchTarget] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  let completedTodos = todos.filter((todo) => !!todo.completed).length;
  let totalTodos = todos.length; 

  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTarget.toLocaleLowerCase()))
  
  console.log(searchTarget)
  return (
    <main className='app-container'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchTarget={setSearchTarget}/>
      <CreateTodoButton todos={todos} openModal={setModalIsOpen}/>
      {modalIsOpen && <Modal isOpen={setModalIsOpen} todos={todos} createTodo={setTodos}/>}
      <TodoFilter />
      <TodoList>
        {searchedTodos.map((todo) => <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)}
      </TodoList>

    </main>
  );
}




export default App;
