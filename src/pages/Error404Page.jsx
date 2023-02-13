import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/error404.css'

const Error404Page = () => {
  return (
    <div className='container'>
      <h1>404 Error Page </h1>
      <p class="zoom-area"><b>Page</b>  not fount </p>
      <section class="error-container">
        <span>4</span>
        <span><span class="screen-reader-text">0</span></span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link to={'/'}><button><h2>Go Home</h2></button></Link>
      </div>
    </div>
  )
}

export default Error404Page