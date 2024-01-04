import TodoInput from './TodoInput';
import './App.css'
import { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (content) => {
    const id = Date.now();

    setTodos((prev) => [
      ...prev,
      {
        id,
        content,
        completed : false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((todo) => {
      return todo.id ===id
      ? {
        ...todo,
        completed: !todo.completed,
      }
      : todo;
    }),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  
  console.log(todos);

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          content={todo.content}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          />
        )
      })
      };
    </div>
  );
};

export default App;
