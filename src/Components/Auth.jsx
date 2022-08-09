import React, { useEffect, useState } from 'react'

// Auth page
export default function Auth() {
    // Input states
    const [imgUrl,setImgUrl] = useState("");
    const [name,setName] = useState("");

    const submit = (e) => {
        e.preventDefault();
        e.target.reset();

        localStorage.setItem("imgUrl", imgUrl);
        localStorage.setItem("userName", name);
        localStorage.setItem("authCompleted", true);

        document.querySelector(".auth").remove();
        window.location.reload();
    }

    useEffect(() => {
        const userTrue = localStorage.getItem("authCompleted");
        if(userTrue){
            document.querySelector(".auth").style.display = "none"; 
        }
    }, [])

  return (
    <form onSubmit={submit} className='auth'>
        <h1 className="title" data-aos="zoom-out-down">YOU ARE ADMIN?</h1>
        <img data-aos="fade-up" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <input className='userImgUrl' data-aos="fade-right" onChange={(e) => setImgUrl(e.target.value)} type="text" placeholder='Your Image Url' />
        <input data-aos="fade-left" maxLength={12} required onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Full Name' />
        <button className='btn btn-success btn-lg d-block mx-auto' type="submit">Submit</button>
    </form>
  )
}
