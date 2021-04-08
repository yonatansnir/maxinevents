import React, { useState } from "react";
import { postEvent } from "../../services/api";

const AddEvent = ( { events, setEvents } ) => {
    const [form, setForm] = useState({ title: '', amount: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postEvent(form, setEvents, events, setLoading);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                כותרת <input type="text" name="title" onChange={handleChange} />
            </label>
            <label>
                מקסימום אנשים <input type="text" name="amount" onChange={handleChange} />
            </label>
            {loading ? "מוסיף..." : <button>הוספה אירוע</button> }
        </form>
    )
}

export default AddEvent;