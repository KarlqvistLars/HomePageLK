import React from 'react'
import sweflag from '../assets/sweflag.jpg'
import { Link } from 'react-router-dom'

export default function AboutEng() {
  return (
    (
      <div className='container'>
                <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>About</div>
        <center>
        <h3 >In Swedish</h3>
          <CustomLink to='/about'>
            <img className='flag' src={sweflag} alt="Engelsk flagga" />
          </CustomLink>
          {<br />}{<br />}
          <div class="contentT500">
            <span className='spec-font-style'>
            Latest education{<br />}
            </span>
            {<br />}
            YrkesAkademin, Advanced Software Developer. {<br />}
            Trollhättan 400 YH-poäng HT 2020 – VT 2022. {<br />}
            Full-time studies in the programming languages C, Java and 
             Python. With a focus on embedded systems.{<br />}
            {<br />}{<br />}
            <span className='spec-font-style'>
               Work experience{<br />}
             </span>
             {<br />}
             <span className='spec-font-style2'>
             Lidköping, Bus Driver{<br />}
             </span>
             2022 May – (ongoing)
             {<br />}{<br />}
             <span className='spec-font-style2'>
             Nobina, Bus driver in regular traffic.{<br />}
             </span>
             2013 Nov – 2020 Sep.{<br />}
             {<br />}
             <span className='spec-font-style2'>
             Lidköping Kyokushin Karate Club{<br />}
             </span>
             (non-profit association work) {<br />}
             2012 Sep – 2013 Oct. {<br />}
             {<br />}
             <span className='spec-font-style2'>
             DMA, Designer{<br />}
             </span>
             2011 Dec – 2012 Aug {<br />}
             {<br />}
             <span className='spec-font-style2'>
             Kinnegrip, Constructor{<br />}
             </span>
             2011 Jan – 2011 Oct {<br />}
             {<br />}
             <span className='spec-font-style2'>
             Finnveden Powertrain, {<br />}
               Design Engineer/ {<br />}
               Mechanical engineering{<br />}
             </span>
             2000 – 2009 Jun{<br />}
             {<br />}
             <span className='spec-font-style2'>
             LPI Engineering Constructor{<br />}
             </span>
             1998 – 2000{<br />}
             {<br />}
             <span className='spec-font-style2'>
             Rekordverken Sweden, Constructor{<br />}
             </span>
             1992 – 1998{<br />}
             {<br />}
             <span className='spec-font-style2'>
             Driving license ABD{<br/>}
             </span>
             D-Eligibility completed 2013-10-10. {<br />}
             YKB since 2013-10-17. {<br />}
           </div>
          <h2 className='copyright'>Copyright© Lars Karlqvist</h2>
        </center>
      </div>
    )
  )
}

function CustomLink({ to, children, ...props }) {
  return (
      <Link to={to} {...props}>
        {children}
      </Link>
  )
}