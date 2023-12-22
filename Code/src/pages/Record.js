import React from 'react'
import qpack1 from '../assets/Q-PACK_1.jpeg';
import qpack2 from '../assets/Q-PACK_2.jpeg';
import qpack3 from '../assets/Q-PACK_3.jpeg';
import qpack4 from '../assets/Q-PACK_4.jpeg';
// import { Link } from 'react-router-dom'

export default function Record(params) {
    return (
        <>
            <div className='container'>
                <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
                <div className='side-header'>Fyrkans inplastaren Q-Pack</div>
                <center>
                    <div className='contentT500'>
                        Lite historia från 90-talet då denna produkt skapades. 
                        Framsidan av broschyren beskriver principen för rotationen och den då patenterade konstruktionslösningen. 
                        Fotografiet i mitten är modellen 120 som jag själv designade rotations bordet till.
                    </div>
                    <div>
                        <img src={qpack1} alt='broschyr inplastare' width={500}/>{<br/>}
                        <img src={qpack2} alt='broschyr inplastare' width={500}/>{<br/>}
                        <img src={qpack3} alt='broschyr inplastare' width={500}/>{<br/>}
                        <img src={qpack4} alt='broschyr inplastare' width={500}/>{<br/>}
                    </div>
                </center>
            </div>
        </>
    );
}