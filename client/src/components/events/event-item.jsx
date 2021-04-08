import React, { useState } from "react";

const EventItem = ({ event, goto, handleDelete }) => {
    let [del, setDelete] = useState(false);
return(
    <div className="event-item">
        {event.title} - {event.amount} - <button onClick={() => goto(event.id)}>הרשמה</button>  <button onClick={() => handleDelete(event.id, setDelete)}>מחיקת אירוע</button>
        {del ? "מוחק..." : ''}
    </div>
)
}

export default EventItem;