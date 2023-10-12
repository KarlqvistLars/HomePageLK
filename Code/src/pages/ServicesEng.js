import React from 'react'
import sweflag from '../assets/sweflag.jpg'
import { Link } from 'react-router-dom'

export default function ServicesEng() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>Services</div>
        <center>
          <h3 >In Swedish</h3>
          <CustomLink to='/services'>
            <img className='flag' src={sweflag} alt="Swedish flag" />
          </CustomLink>
          {<br />}{<br />}
          <div className='contentT500center'>
            This is the skills I can help You with:{<br />}
            {<br />}
            CAD-engineering mechanical/mechatronics.{<br />}
            {<br />}
            Programming in the language:{<br />}
            Java, C, C++, C# and SQL-database.{<br />}
            {<br />}
            Website programming in:{<br />}
            HTML, css, Javascript och PHP.{<br />}{<br />}
          </div>
          <h2 className='copyright'>Copyright© Lars Karlqvist</h2>
        </center>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  return (
      <Link to={to} {...props}>
        {children}
      </Link>
  )
}
