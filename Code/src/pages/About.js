import React from 'react'
import engflag from '../assets/engflag.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    (
      <div className='container'>
        <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
        <div className='side-header'>About</div>
        <center>
          <h3 >In English</h3>
          <CustomLink to='/about-eng'>
            <img className='flag' src={engflag} alt="Engelsk flagga" />
          </CustomLink>
          {<br />}{<br />}
          <div class="contentT500">
            <span className='spec-font-style'>
              Senaste utbildning {<br />}
            </span>
            {<br />}
            YrkesAkademin, Advanced Software Developer. {<br />}
            Trollhättan 400 YH-poäng HT 2020 – VT 2022. {<br />}
            Heltidsstudier i programspråken C, Java och {<br />}
            Pyhton. Med inriktning på inbyggda system.{<br />}
            {<br />}{<br />}
            <span className='spec-font-style'>
              Arbetslivserfarenhet{<br />}
            </span>
            {<br />}
            <span className='spec-font-style2'>
            Lidköping, Busschaufför{<br />}
            </span>
            2022 Maj – (pågående)
            {<br />}{<br />}
            <span className='spec-font-style2'>
            Nobina, Busschaufför i linjetrafik.{<br />}
            </span>
            2013 Nov – 2020 Sep.{<br />}
            {<br />}
            <span className='spec-font-style2'>
            Lidköping Kyokushin Karateklubb{<br />}
            </span>
            (idellt föreningsarbete) {<br />}
            2012 Sep – 2013 Okt.{<br />}
            {<br />}
            <span className='spec-font-style2'>
            DMA, Konstruktör{<br />}
            </span>
            2011 Dec – 2012 Aug {<br />}
            {<br />}
            <span className='spec-font-style2'>
            Kinnegrip, Konstruktör{<br />}
            </span>
            2011 Jan – 2011 Okt {<br />}
            {<br />}
            <span className='spec-font-style2'>
            Finnveden Powertrain, {<br />}
              Design Engineer/ {<br />}
              Mechanical engineering{<br />}
            </span>
            2000 – 2009 Jun{<br />}
            {<br />}
            <span className='spec-font-style2'>
            LPI Engineering Konstruktör{<br />}
            </span>
            1998 – 2000{<br />}
            {<br />}
            <span className='spec-font-style2'>
            Rekordverken Sweden, Konstruktör{<br />}
            </span>
            1992 – 1998{<br />}
            {<br />}
            <span className='spec-font-style2'>
            Körkort ABD{<br/>}
            </span>
            D-Behörighet klar 2013-10-10. {<br />}
            YKB sedan 2013-10-17. {<br />}
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