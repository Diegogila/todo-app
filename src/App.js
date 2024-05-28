import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/TodoButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <CreateTodoButton />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

    </div>
  );
}




export default App;
