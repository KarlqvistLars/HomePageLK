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
          Display of some small projects I did in C#:{<br />}
             <ul>
             <li> <a href='https://youtu.be/nqY0pf52gW4?t=673' target='_blank' rel='noreferrer' style={{color: '#00aeff', textDecoration: 'none', fontWeight : 'bolder'}}>Password generator</a></li>
               <li> <a href='https://youtu.be/nqY0pf52gW4' target='_blank' rel='noreferrer' style={{ color: '#00aeff', textDecoration: 'none', fontWeight: 'bolder' }}>Ceasar crypto</a></li>
               <li>SQL App (Coming Soon)</li>
                 {/* <li>The thesis</li>
                 <li>Radar</li> */}
            </ul>
            Additional projects that I am working on for my own development:{<br />}
            <ul>
              <li> <a href='https://youtu.be/VGFOZjMJuCs' target='_blank' rel='noreferrer' style={{ color: '#00aeff', textDecoration: 'none', fontWeight: 'bolder' }}>Demo of React Components as a calendar function</a></li>
            </ul>
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
