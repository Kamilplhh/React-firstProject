import { useState } from 'react';

export function TodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    const current = new Date();
    const today = `${current.getFullYear()}-${('0' + (current.getMonth() + 1)).slice(-2)}-${('0' + current.getDate()).slice(-2)}`;
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
                <input type="text" id="item" value={newItem} autoComplete="off" onChange={e => setNewItem(e.target.value)} required />
                <input type="date" name="deadline" value={newDate} onChange={e => setNewDate(e.target.value)} id="date" min={today} />
                <button className="btn">Add</button>
            </div>
        </form>
    )
}