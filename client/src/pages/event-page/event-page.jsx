import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getOneEvent } from "../../services/api";

const EventPage = () => {
    let [event, setEvent] = useState(null);
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        getOneEvent(id, setEvent)
    }, [])

    return (
        <div className="event-page">
            {!event ? "טוען..." : 
                <div>
                    <h1>{event.title}</h1><button onClick={() => history.push("/")}>חזרה</button>
                </div>
            }
        </div>
    )
}

export default EventPage;