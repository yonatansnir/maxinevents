const api = "http://localhost:8000/api";

export async function getEvents(setEvents) {
    let resp = await fetch(`${api}/events`);
    let events = await resp.json();
    setEvents(events);
}

export async function getOneEvent(id, setEvent) {
    let resp = await fetch(`${api}/events/${id}`);
    let event = await resp.json();
    setEvent(event[0]);
}

export function postEvent(form, setEvents, events, setLoading) {
    setLoading(true);
    let newData = {
        title: form.title,
        amount: parseInt(form.amount)
    }

    fetch(`${api}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
    })
        .then(data => data.json())
        .then(data => {
            setEvents([...events, { id: data.insertId, title: newData.title, amount: newData.amount }])
            setLoading(false);
        });
}

export function deleteEvent(id, setDelete, events, setEvents) {
    setDelete(true);
    fetch(`${api}/events/${id}`, {
        method: "DELETE"
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setDelete(false);
            setEvents([...events.filter(e => e.id !== id)])
        })
}