import React from 'react'
import engflag from '../assets/engflag.jpg'
import { Link } from 'react-router-dom'

export default function History() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>History</div>
        <center>
          <h3 >In English</h3>
          <CustomLink to='/history-eng'>
            <img className='flag' src={engflag} alt="Engelsk flagga" />
          </CustomLink>
          <div class="content500" >
            {/* Textstycke */}
            <p><span className='spec-font-style'>Historiska arbetsgivare:</span></p>
            <div>
              - Rekordverken{<br />}
              - LPI/Finnveden/Gnutti{<br />}
              - Kinnegrip{<br />}
              - DMA{<br />}
            </div>
            <p><span className='spec-font-style'>Nuvarande:</span></p>
            - Nobina{<br />}{<br />}
            Syftet med den här sidan är att hitta ett annat jobb än att köra buss på heltid.{<br />}
            Detta är själva bakgrunden till varför den här sidan skapades.{<br />}{<br />}
            Med vänlig hälsning{<br />}Lars Karlqvist
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