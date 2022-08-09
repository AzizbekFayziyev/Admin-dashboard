import React from 'react'
import { Link } from 'react-router-dom'
import pageError from "../Assets/images/pageError.gif"

export default function PageError() {
  // 404 page
  return (
    <div id='errorPage'>
      <img width="100%" src={pageError} alt="404" />
      <h1 data-aos="zoom-out-down" className="title">Page Not Found!</h1>
      <p>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
      <Link
        to="/">
        <button className='btn btn-success btn-lg mx-auto d-block'>Back To Home</button>
      </Link>
    </div>
  )
}
