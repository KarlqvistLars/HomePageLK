import React from 'react'
import engflag from '../assets/engflag.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>Services</div>
        <center>
          <h3 >In English</h3>
          <CustomLink to='/services-eng'>
            <img className='flag' src={engflag} alt="Engelsk flagga" />
          </CustomLink>
          {<br />}{<br />}
          <div className='contentT500center'>
            Det här är de färdigheter jag kan hjälpa Er med:{<br />}
            {<br />}
            CAD-konstruktion mekanik/mekatronik.{<br />}
            {<br />}
            Programmerings uppgifter i språken:{<br />}
            Java, C, C++, C# och SQL-databas.{<br />}
            {<br />}
            Webbplatsprogrammering i:{<br />}
            HTML, css, Javascript och PHP.{<br />}
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
