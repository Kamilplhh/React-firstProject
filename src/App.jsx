import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <>
      <form>
        <div className="form">
          <label htmlFor="item">New work</label>
          <input type="text" id="item" />
          <input type="date" name="deadline" id="" />
          <button>Add</button>
        </div>
      </form>
      <section>
      <h1 className='header'>Todo List</h1>
        <div className="list">
          <ul>
            <li>
              <label>
                <input type="checkbox" />
                Take a dog for a walk wigh maggie 2023/23/06
              </label>
              <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                Item 2 2023/26/02
                <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                Item 2 2023/26/02
                <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
              </label>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}