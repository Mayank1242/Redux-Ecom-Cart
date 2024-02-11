import React from 'react'
import { Link } from 'react-router-dom'

function Slide(props) {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
    <div className="pt-8">
    <div className="flex items-center">
      <ol className="flex w-full items-center overflow-hidden">
        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <Link to="/">Home</Link>
        </li>
   
        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
          <Link className="capitalize" to="/cart">
            {props.name}
          </Link>
        </li>
      
       
      </ol>
    </div>
  </div>
    </div>
  )
}

export default Slide