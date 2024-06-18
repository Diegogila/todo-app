import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React, { useState } from 'react';
import './styles/App.css'
import { TodoFilter } from './components/TodoFilter';

const defaultTodos = [
  {text:'Cortar cebolla ', completed: false},
  {text:'Bailar Macarena', completed: true},
  {text:'Estudiar', completed: false},
  {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry', completed: true},
  {text:'Salir a comer', completed: false},
]



function App() {
  return (
    <main className='app-container'>
      <TodoCounter completed={15} total={defaultTodos.length} />
      <TodoSearch />
      <CreateTodoButton />
      <TodoFilter />
      <TodoList>
        {defaultTodos.map((todo) => <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)}
      </TodoList>

    </main>
  );
}




export default App;
