import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Messages() {

    const [messages, setMessages] = useState([]);
    const [searchInput,setSearchInput] = useState("")
    const url = "https://jsonplaceholder.typicode.com/comments"

    // Comments api
    async function comments() {
        const res = await fetch(url);
        const json = await res.json();
        setMessages(json);
        console.log(json);
    }

    useEffect(() => {
       comments();
    }, [])

    // filter messages
   const filtered = messages.filter(e => {
    return e.name.toLowerCase().includes(searchInput.toLowerCase());
   })

    return (
        <section id='messages'>
            <h1 data-aos="zoom-out-down" className="title">Lasted Messages</h1>

            <input data-aos="zoom-in" onChange={e => setSearchInput(e.target.value)} autoFocus type="search" placeholder='Search Messages By Name...' />

            {filtered.length ? filtered.map((e, id) => (
               <Link  key={id} to={`/messages/${e.name}`}>
                <div className="messages">
                    <h3>{e.name}</h3>
                    <p><span>{e.email}</span></p>
                    <p>{e.body}</p>
                </div>
               </Link>
            )) : <h1 data-aos="zoom-out-down" className='title my-3'>Not Found...</h1>}
        </section>
    )
}
