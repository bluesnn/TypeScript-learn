import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import TodoForm from "./TodoForm";
import axios from '../../utils/axios';
import './App.css';

type Todo = {
  id: number;
  name: string;
  done: boolean;
}

type Todos = Todo[];

function App() {
  const [todos, setTodos] = useState<Todos>([])

  const refreshTodos = () => {
    // FIXME 这边必须手动声明axios的返回类型。
    axios<Todos>("/api/todos").then(setTodos);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const onToggleTodo = async (todo: Todo) => {
    await axios("/api/toggle", todo.id);
    refreshTodos();
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <TodoForm
            refreshTodos={refreshTodos}
          />
          {todos.map((todo, index) => {
            return (
              <li
                onClick={() => onToggleTodo(todo)}
                key={index}
                className={classNames({
                  done: todo.done,
                })}
              >
                {todo.name}
              </li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
