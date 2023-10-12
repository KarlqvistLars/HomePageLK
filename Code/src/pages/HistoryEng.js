import React from 'react'
import sweflag from '../assets/sweflag.jpg'
import { Link } from 'react-router-dom'

export default function History() {
  return (
    <>
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>History</div>
        <center>
          <h3 >In Swedish</h3>
          <CustomLink to='/history'>
            <img className='flag' src={sweflag} alt="Swedish flag" />
          </CustomLink>
          <div class="content500" >
            {/* Textstycke */}
            <p><span className='spec-font-style'>Historical Employers:</span></p>
            <div>
              - Record Works{<br />}
              - LPI/Finnveden/Gnutti{<br />}
              - Kinnegrip{<br />}
              - DMA{<br />}
            </div>
            <p><span className='spec-font-style'>Current:</span></p>
            - Nobina{<br />}{<br />}
            The purpose of this page is to find a job other than full-time bus driving.{<br />}
            This is the very background of why this page was created.{<br />}{<br />}
            Best regards{<br />}Lars Karlqvist
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