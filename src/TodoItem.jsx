import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export function TodoItem({ done, id, title, date, todoDone, deleteTodo, visible}) {
    return (
        <li style={{display: visible}}>
            <label>
                <input type="checkbox" checked={done} onChange={e => todoDone(id, e.target.checked)} />
                {title} {date}
            </label>
            <FontAwesomeIcon onClick={() => deleteTodo(id)} icon={faTrash} className='faTrash'></FontAwesomeIcon>
        </li>
    )
}