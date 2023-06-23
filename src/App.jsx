

export default function App() {
  return (
    <>
      <form>
        <div className="form">
          <label htmlFor="item">New work</label>
          <input type="text" id="item" />
          <input type="date" name="deadline" id="" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1 2023/23/06
            <button className="btn btn-danger"></button>
          </label>
        </li>
      </ul>
    </>
  )
}