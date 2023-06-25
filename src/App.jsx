import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  const current = new Date();
  const today = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
  const [newDate, setNewDate] = useState(today)

  function Submit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, date: newDate, done: false },
      ]
    })
    setNewItem("")
    setNewDate(today)
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

  let nextweek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  nextweek = `${nextweek.getFullYear()}-0${nextweek.getMonth() + 1}-${nextweek.getDate()}`;

  return (
        <>
          <form onSubmit={Submit}>
            <div className="form">
              <label htmlFor="item">New work</label>
              <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} required />
              <input type="date" name="deadline" value={newDate} onChange={e => setNewDate(e.target.value)} id="date" min={today} />
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
          {/* <button onClick={() => weeklyTodo()}>This week</button> */}
          {/* <button onClick={() => allTodo()}>Rest</button> */}
        </>
      )
    }