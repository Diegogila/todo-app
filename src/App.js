import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/TodoButton';
import './App.css';

const defaultTodos = [
  {text:'Cortar cebolla', completed: false},
  {text:'Bailar Macarena', completed: true},
  {text:'Estudiar', completed: false},
  {text:'Hacer ejercicio', completed: true},
  {text:'Salir a comer', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={15} total={20} />
      <CreateTodoButton />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)}
      </TodoList>

    </>
  );
}




export default App;
