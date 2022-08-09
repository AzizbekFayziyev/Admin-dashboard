import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Message() {
    // Message
    const [messages, setMessages] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/comments"
    const { id } = useParams();

    async function comments() {
        const res = await fetch(url);
        const json = await res.json();
        setMessages(json);
    }

    useEffect(() => {
        comments();
    }, [])

    const filtered = messages.filter(e => {
        return e.name.toLowerCase().includes(id.toLowerCase());
    })

    return (
        <div id='message'>
            <Link to="/messages">Back to messages</Link>
            {filtered.length? filtered.map(e => (
                <div key={e.id} className="message">
                     <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={e.id} />
                    <h1 data-aos="zoom-out-down" className="title text-center">Comment name: {e.name}</h1>
                    <p><span>Post id: {e.id}</span></p>
                    <h3>{e.body}</h3>
                </div>
            )) : <h1 data-aos="zoom-out-down" className='title mt-5'>Loading...</h1>}
        </div>
    )
}
