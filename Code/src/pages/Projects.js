import React from 'react'
import engflag from '../assets/engflag.jpg'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>Projects</div>
        <center>
          <h3 >In English</h3>
          <CustomLink to='/projects-eng'>
            <img className='flag' src={engflag} alt="Engelsk flagga" />
          </CustomLink>
          {<br />}{<br />}
          <div className='content500'>
            Dislpay av några projekt som jag gjort:{<br />}
            {<br />}
            <ul>
                <li>Lösenordsgenerator</li>
                <li>Ceasar krypto</li>
                <li>SQL-app</li>
                <li>Examensarbetet</li>
                <li>Radar</li>
            </ul>{<br />}
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
