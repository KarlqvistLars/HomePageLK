import React from 'react'
import sweflag from '../assets/sweflag.jpg'
import { Link } from 'react-router-dom'
import nobinabus from "../assets/bussnobina.jpg"
import flygbild from "../assets/iluften.jpg"
import landning24 from "../assets/landning24.JPG"
import maskinfoto from "../assets/maskindma.jpg"
import fyrkantsbalsinplastare from "../assets/qpack.jpg"

export default function Mystory() {
    return (
        <div className='container'>
            <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
            <div className='side-header'>My Story</div>
            <center>
                <h3 >In Swedish</h3>
                <CustomLink to='/mystory'>
                    <img className='flag' src={sweflag} alt="Svensk flagga" />
                </CustomLink>
                <div className="contentFull">
                    <p style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "30px", maxWidth: "800px" }}>
                        <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                            2020-2022 Education</span>
                        {<br />}
                        I studied programming at YH in Trollhättan.{<br />}
                        <a href="https://true.ya.se/examensbevisya-lars-karlqvist-54512-972-fqo7/?badge=qrcode-raw&ref=qrcode&lang=se"
                            target="_blank" rel="noreferrer">
                            Advanced Software Developer Electrical & Autonomous Vehicles
                        </a>
                        {<br />}I have put together this website as some kind of advertisement for what I can do.
                        {<br />}My goal with the education is to find a developing job in industry or
                        corresponding again. A job where you are allowed to think about other things than just looking at the road.
                    </p>
                </div>
                {<br />}
                <div style={{ backgroundColor: "#09c372", color: "#09c372" }}>SKILJELINJE</div>
                {<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2013-2020 / 2022-Ongoing Nobina, Lidköping
                    </span>
                    {<br />}Drives a bus for Nobina to Västtrafik.
                    <a href="https://www.facebook.com/lars.karlqvist/posts/pfbid02vHRrSesuLihNGJmUjvjChtPmiZ5QMT1ddJVNdfsHMA53ab9S6AaV9SiTaCJmEx7Fl"
                        target="_blank" rel="noreferrer"> Often early mornings.</a>
                    {<br />}
                    <a href="https://www.facebook.com/photo/?fbid=8898502756841376&set=pcb.8898503230174662"
                        target="_blank" rel="noreferrer">
                        <img src={nobinabus} alt="Västtrafik buss i Lidköping" class="picsFull" />
                    </a>The bus in the photo is an Electric bus from Nobina in Lidköping of the BYD brand.{<br />}
                </div>
                {<br />}
                {<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2009-2013 Studies, Kinnegrip and DMA</span>
                    {<br />}
                    Between 2009 and 2013 I studied at HiS (2009/08-2010/05), then I worked at Kinnegrip
                    (2011/01-2011/10) and DMA Lidköping (2011/12-2012/08). It was a time in life that was sometimes quite
                    hard between jobs. In short, it was hard, but is also a knowledge you can benefit from.
                    {<br />}{<br />}But you do what you can to keep both the steam and the mood up. Worked voluntarily with carpentry
                    and painting work for the sports association Lidköping Kyokushin Kararateklubb (2012/09-2013/10).
                    Also took the opportunity to bring up my interest in gliding a few years (2010-2016) during this period.

                    <img src={flygbild} alt="I luften äver Lidköping" class="picsFull" />
                    <img src={landning24} alt="Landing bana 24" class="picsFull" />
                    <img src={maskinfoto} alt="Maskin" class="picsFull" />{<br />}{<br />}
                    In the fall of 2012, I was advised to ask for a Bus(D-rating) driving license from the Employment Agency.
                    Because there would be a need for bus drivers. This was not something I had any motivation for or
                    desire to do, but I did it.
                </div>
                {<br />}{<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2003-2009 Finnveden Powertrain, Ljungmansgatan</span>
                    {<br />}
                    At Finnveden Powertrain, there were 4 of us from the beginning who worked on development projects for our customers
                    linked to our own production.
                    At most there were 7 of us in the department before the company was bought by an Italian competitor, <a
                        href="https://www.gnutticarlo.com/en/" target="_blank" rel="noreferrer">Gnutti Carlo</a>.
                    When they chose to move our office to Gothenburg, my family situation at the time meant that it was
                    hard for me to follow.{<br />}{<br />}
                    Some of the projects I was involved in that we completed were: {<br />}
                    {<br />}
                    <div style={{ marginLeft: "5px" }}>
                        <ul style={{ listStyle: "disc" }}>
                            <li>Volvo Trucks introduction of a new VEB (engine brake) generation. The one for the engines MD13 and
                                MD16.
                                We were involved in the development of performance through the testing and manufacture of rocker arms.</li>
                            <li>VVA systems and prototypes from <a href="https://www.freevalve.com/"
                                target="_blank" rel="noreferrer">Cargine</a> for research project on SAAB engine as test bench.</li>
                            <li>Test bench for Daimler-Benz with the same VVA system from Cargine, which today is Freevalve.</li>
                            <li>Testing and development of fuel valve for Volvo's MD13 and MD16 engines.</li>
                        </ul>
                    </div>
                    {<br />}
                </div>
                {<br />}{<br />}

                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        1998-2003 LPI Engineering to Finnveden Engineering</span>{<br />}
                    In February 1998 I started at LPI Engineering in Lidköping. That same year, in March 1998, I became a parent and
                    the future looked very bright and harmonious.
                    In autumn 1999, LPI was bought by Finnveden Powertrain. A daughter-company to
                    <a href="https://sv.wikipedia.org/wiki/Finnveden_AB" target="_blank" rel="noreferrer">Finnveden AB</a>
                    which was a company with almost 3000 employees at their peak.{<br />}{<br />}
                    Some of the projects I was involved in and we completed were: {<br />}
                    {<br />}
                    <div style={{ marginLeft: "5px" }}>
                        <ul style={{ listStyle: "disc" }}>
                            <li>Mounting cell for car seat belt buckle for Autoliv in Vårgårda.</li>
                            <li>Manufacturing cell for Ablaufstück which was a component for a common rail system for
                                truck-sized diesel engines. </li>
                            <li>Robot gripper for LPI and handling of Volvo kingpin (front wheel axle). </li>
                            <li>Filter press for Analysis in Lidköping.</li>
                        </ul>
                    </div>
                    {<br />}
                    The company we worked for in Lidköping changed it's name from LPI Engineering to Finnveden Engineering
                    after Finnveden bought us in 1999.
                    In June 2003, Finnveden sold the company to Mastec, a company with owners from the IT industry.
                    Those who took over Finnveden's manufacturing facility in Lidköping and also the engineering office.{<br />}{<br />}
                    Then I and 3 colleagues got the offer to accompany Finnveden Powertrain to a new workplace on Ljungmansgatan
                    in Lidköping.
                </div>
                {<br />}{<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        1993-1998 Rekordverken, Öttum</span>
                    {<br />}
                    In 1993, the training to become a mechanical engineer at the University of Skövde was completed. I had previously worked in the summer
                    at Rekordverken in Öttum, where after college I got a job as a designer/draftsman.
                    I brought with me knowledge of CAD/CAM and above all Autocad. This came in handy when Rekordverken
                    bought the competing company Svegma which had two CAD stations which became the new way to
                    document drawings.{<br />}
                    {<br />}
                    <img src={fyrkantsbalsinplastare} class="picsFull" alt="Fyrkants inplastare" />
                    During my time at the record works, I was responsible for the development of the quality manual for ISO 9001, which then became the basis for
                    the company's first quality certificate acc. this standard. This was not a one-man job, but I did the paperwork.
                    {<br />}{<br />}
                    But a fun imprint in the company I got to make was in 1992 inventing a principle for rotating a square around a given center.
                    Which was at the heart of the design of the company's square balsin plasterer.{<br />}{<br />}
                    Patent <a href="https://tc.prv.se/spd/search?lang=sv&tab=1">SE 9201060-2</a> in the Swedish patent database.
                </div>
                <h2 className='copyright'>Copyright© Lars Karlqvist</h2>
            </center>
        </div>
    )

    function CustomLink({ to, children, ...props }) {
        return (
            <Link to={to} {...props}>
                {children}
            </Link>
        )
    }
}
