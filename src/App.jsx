import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [newDate, setNewDate] = useState("")
  const [todos, setTodos] = useState([])

  function Submit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, date: newDate, done: false },
      ]
    })
    setNewItem("")
    setNewDate("")
  }

  function TodoDone(id, done) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={Submit}>
        <div className="form">
          <label htmlFor="item">New work</label>
          <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} required />
          <input type="date" name="deadline" value={newDate} onChange={e => setNewDate(e.target.value)} id="date" />
          <button>Add</button>
        </div>
      </form>
      <section>
        <h1 className='header'>Todo List</h1>
        <div className="list">
          <ul>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
              return (
                <li key={todo.id}>
                  <label>
                    <input type="checkbox" checked={todo.done} onChange={e => TodoDone(todo.id, e.target.checked)} />
                    {todo.title} {todo.date}
                  </label>
                  <FontAwesomeIcon onClick={() => deleteTodo(todo.id)} icon={faTrash} className='faTrash'></FontAwesomeIcon>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}