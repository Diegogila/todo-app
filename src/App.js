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

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchTarget, setSearchTarget] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //Save and update todos
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  
  //Count states
  let completedTodos = todos.filter((todo) => !!todo.completed).length;
  let totalTodos = todos.length; 

  //Search filter
  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTarget.toLocaleLowerCase()))

  //Create a new todo from modal block
  const createTodoFunc = (newTodo) => {
    saveTodos([...todos,newTodo])
    setModalIsOpen(false)
  }


  const deleteTodo = (key) => {
    const currentTodosAlive = todos.filter((todo) => todo.text != key);
    saveTodos(currentTodosAlive);
  }

  const completeTodoToggle = (key) => {
    const newTodos = [...todos]
    const todoIntex = newTodos.findIndex((todo) => todo.text == key);
    newTodos[todoIntex].completed = newTodos[todoIntex].completed ? false : true;
    saveTodos(newTodos)
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
        onComplete={() => completeTodoToggle(todo.text)}
        deleteTodo={() => deleteTodo(todo.text)}
        />)}
      </TodoList>
      <CreateTodoButton todos={todos} openModal={setModalIsOpen}/>

    </main>
  );
}




export default App;
