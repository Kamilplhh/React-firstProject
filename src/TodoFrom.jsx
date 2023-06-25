import { useState } from 'react';

export function TodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    const current = new Date();
    const today = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
    const [newDate, setNewDate] = useState(today)

    function Submit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem, newDate)

        setNewItem("")
        setNewDate(today)
    }

    return (
        <form onSubmit={Submit}>
            <div className="form">
                <label htmlFor="item">New work</label>
                <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} required />
                <input type="date" name="deadline" value={newDate} onChange={e => setNewDate(e.target.value)} id="date" min={today} />
                <button>Add</button>
            </div>
        </form>
    )
}