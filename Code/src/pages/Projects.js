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
            Display av några små projekt som jag gjort i C#:{<br />}
            <ul>
              <li> <a href='https://youtu.be/nqY0pf52gW4?t=673' target='_blank' rel='noreferrer' style={{ color: '#00aeff', textDecoration: 'none', fontWeight: 'bolder' }}>Lösenordsgenerator</a></li>
              <li> <a href='https://youtu.be/nqY0pf52gW4' target='_blank' rel='noreferrer' style={{ color: '#00aeff', textDecoration: 'none', fontWeight: 'bolder' }}>Ceasar krypto</a></li>
              <li>SQL-app (Visas inom kort)</li>
              {/* <li>Examensarbetet</li>
                <li>Radar</li> */}
            </ul>
          Ytterligare projekt som jag jobbar med för min egen utveckling:{<br />}
            <ul>
              <li> <a href='https://youtu.be/VGFOZjMJuCs' target='_blank' rel='noreferrer' style={{ color: '#00aeff', textDecoration: 'none', fontWeight: 'bolder' }}>Demo av React Components som en kalender funktion</a></li>
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
