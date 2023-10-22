import React from 'react'
import sweflag from '../assets/sweflag.jpg'
import { Link } from 'react-router-dom'

export default function ProjectsEng() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>Projects</div>
        <center>
          <h3 >In Swedish</h3>
          <CustomLink to='/projects'>
            <img className='flag' src={sweflag} alt="Svensk flagga" />
          </CustomLink>
          {<br />}{<br />}
          <div className='content500'>
          Dislpay of some projects I did:{<br />}
             {<br />}
             <ul>
                 <li>Password generator</li>
                 <li>Ceasar crypto</li>
                 <li>SQL App</li>
                 <li>The thesis</li>
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
