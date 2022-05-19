import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
    
    <div> 
        <h1> 404 page not found</h1>
    </div>

    <div>
        <Link to={'/'}> 
        <button className='btn btn-danger rounded-pill'> Go Back to Home</button>
        </Link>
    </div>
    </>
  )
}

export default Page404