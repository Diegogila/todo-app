import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React, { useState } from 'react';
import './styles/App.css'
import { TodoFilter } from './components/TodoFilter';
import { Modal } from './components/Modal';

// const defaultTodos = [
//   {text:'Cortar cebolla ', completed: false},
//   {text:'Bailar Macarena', completed: false},

// ]


function App() {
  const [todos, setTodos] = useState([]);
  const [searchTarget, setSearchTarget] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  //Count states
  let completedTodos = todos.filter((todo) => !!todo.completed).length;
  let totalTodos = todos.length; 

  //Search filter
  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTarget.toLocaleLowerCase()))

  //Create a new todo from modal block
  const createTodoFunc = (newTodo) => {
    setTodos([...todos,newTodo])
    setModalIsOpen(false)
  }


  const deleteTodo = (key) => {
    const currentTodosAlive = todos.filter((todo) => todo.text != key);
    setTodos(currentTodosAlive);
  }

  const completeTodoToggle = (key) => {
    const newTodos = [...todos]
    const todoIntex = newTodos.findIndex((todo) => todo.text == key);
    newTodos[todoIntex].completed = newTodos[todoIntex].completed ? false : true;
    setTodos(newTodos)
  }


  return (
    <main className='app-container'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchTarget={setSearchTarget}/>
      {modalIsOpen && <Modal isOpen={setModalIsOpen} newTodo={createTodoFunc}/>}
      <TodoFilter />
      <TodoList>
        {searchedTodos.map((todo) => <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={completeTodoToggle}
        deleteTodo={deleteTodo}
        />)}
      </TodoList>
      <CreateTodoButton todos={todos} openModal={setModalIsOpen}/>

    </main>
  );
}




export default App;
