import React, { useState } from 'react'
import axios from '../../utils/axios'

interface Props {
  refreshTodos: () => void
}

const TodoForm: React.FC<Props> = ({ refreshTodos }) => {
// function TodoForm<Props>({ refreshTodos }) {
  const [name, setName] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random(),
      name,
      done: false
    };

    if (name.trim()) {
      axios('/api/add', newTodo);
      refreshTodos();
      setName('');
    }
  }

  return (
    <form
      className="todo-form"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="todo-input"
        value={name}
        onChange={onChange}
        placeholder="请输入"
      />
      <button>add</button>
    </form>
  )
}

export default TodoForm;
