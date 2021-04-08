import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getEvents, deleteEvent } from "../../services/api";
import AddEvent from "./add-event";
import EventItem from "./event-item";

const EventsList = () => {
    const [events, setEvents] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getEvents(setEvents);
    }, [])

    const handleDelete = (id, setDelete) => {
        deleteEvent(id, setDelete, events, setEvents)
    }

    return (
        <div className="events-list">
            <h1>רשימת אירועים:</h1>
            {!events ? 'טוען...' : 
                events.map(e => <EventItem key={e.id} event={e} goto={(id) => history.push('/event/'+id)} handleDelete={handleDelete} />)
            }

            <AddEvent events={events} setEvents={setEvents} />
        </div>
    )
}

export default EventsList;