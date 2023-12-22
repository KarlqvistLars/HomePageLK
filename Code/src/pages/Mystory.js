import React from 'react'
import { Route } from 'react-router-dom'
import engflag from '../assets/engflag.jpg'
import { Link } from 'react-router-dom'
import nobinabus from "../assets/bussnobina.jpg"
import flygbild from "../assets/iluften.jpg"
import landning24 from "../assets/landning24.JPG"
import maskinfoto from "../assets/maskindma.jpg"
import fyrkantsbalsinplastare from "../assets/qpack.jpg"

export default function Mystory() {
    return (
        <div className='container'>
        <element onreset={Reset()}>
        </element>
            <div className="sloganMoving"><p>Work for a better tomorrow</p></div>
            <div className='side-header'>My Story</div>
            <center>
                <h3 >In English</h3>
                <CustomLink to='/mystory-eng'>
                    <img className='flag' src={engflag} alt="Engelsk flagga" />
                </CustomLink>
                <div className="contentFull">
                    <p style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "30px", maxWidth: "800px" }}>
                        <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                            2020-2022 Utbildning</span>
                        {<br />}
                        Utbildade jag mig i programmering på YH i Trollhättan.{<br />}
                        <a href="https://true.ya.se/examensbevisya-lars-karlqvist-54512-972-fqo7/?badge=qrcode-raw&ref=qrcode&lang=se"
                            target="_blank" rel="noreferrer">
                            Advanced Software Developer Electrical & Autonomous Vehicles
                        </a>
                        {<br />}Jag har snickrat ihop den här hemsidan som någon form av reklam för vad jag kan.
                        {<br />}Mitt mål med utbildningen är att hitta ett utvecklande arbete inom industri eller
                        motsvarande igen. Ett arbete där man får lov att tänka på annat än bara se på vägen.
                    </p>
                </div>
                {<br />}
                <div style={{ backgroundColor: "#09c372", color: "#09c372" }}>SKILJELINJE</div>
                {<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2013-2020 / 2022-Pågående Nobina, Lidköping
                    </span>
                    {<br />}Kör buss för Nobina åt Västtrafik. 
                    <a href="https://www.facebook.com/lars.karlqvist/posts/pfbid02vHRrSesuLihNGJmUjvjChtPmiZ5QMT1ddJVNdfsHMA53ab9S6AaV9SiTaCJmEx7Fl"
                        target="_blank" rel="noreferrer"> Ofta tidiga mornar.</a>
                    {<br />}
                    <a href="https://www.facebook.com/photo/?fbid=8898502756841376&set=pcb.8898503230174662"
                        target="_blank" rel="noreferrer">
                        <img src={nobinabus} alt="Västtrafik buss i Lidköping" class="picsFull" />
                    </a>Bussen på fotot är en Elbuss hos Nobina i Lidköping av märket BYD.{<br />}
                </div>
                {<br />}
                {<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2009-2013 Studier, Kinnegrip och DMA</span>
                    {<br />}
                    Mellan 2009 och 2013 studerade jag på HiS (2009/08-2010/05), därefter arbetade jag på Kinnegrip
                    (2011/01-2011/10) och DMA Lidköping (2011/12-2012/08). Det var en tid i livet som var ganska
                    besvärlig mellan anställningar. Det var jobbigt kort sagt, men är också en kunskap man kan ha nytta av.
                    {<br />}{<br />}Men man gör vad man kan för att hålla både ångan och humöret uppe. Arbetade ideellt med snickeri
                    och måleriarbete åt idrottsföreningen Lidköpings Kyokushin Kararateklubb (2012/09-2013/10).
                    Passade även på att ta upp mitt intresse för segelflyg några år (2010-2016) under denna period.

                    <img src={flygbild} alt="I luften äver Lidköping" class="picsFull" />
                    <img src={landning24} alt="Landing bana 24" class="picsFull" />
                    <img src={maskinfoto} alt="Maskin" class="picsFull" />{<br />}{<br />}
                    Hösten 2012 fick jag rådet rådet att be att få ett D-körkort av Arbetsförmedligen.
                    Eftersom det skulle finnas behov av busschaufförer. Detta var inget jag hade någon drivkraft eller
                    önskan att göra, men jag gjorde det.
                </div>
                {<br />}{<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        2003-2009 Finnveden Powertrain, Ljungmansgatan</span>
                    {<br />}
                    På Finnveden Powertrain var vi från början 4st som arbetade med utvecklingsprojekt för våra kunder
                    kopplat till vår egen produktion.
                    Som mest var vi 7st på avdelningen innan företaget köptes utav en Italiensk konkurrent, <a
                        href="https://www.gnutticarlo.com/en/" target="_blank" rel="noreferrer">Gnutti Carlo</a>.
                    När de valde att flytta vårt kontor till Göteborg så gjorde min dåvarande familjesitution att jag hade
                    svårt att följa med.{<br />}{<br />}
                    Några av de projekt som jag var delaktig i som vi genomförde var: {<br />}
                    {<br />}
                    <div style={{ marginLeft: "5px" }}>
                        <ul style={{ listStyle: "disc" }}>
                            <li>Volvo Lastvagnars införande av en ny VEB (motorbroms) generation. Den för motorerna MD13 och
                                MD16.
                                Vi var med i utvecklingen av prestanda genom testning och tillverkning av vipparmar.</li>
                            <li>VVA-system och prototyper från <a href="https://www.freevalve.com/"
                                target="_blank" rel="noreferrer">Cargine</a> för forskningsprojekt på SAAB motor som test bänk.</li>
                            <li>Testbänk för Daimler-Benz med samma VVA-system från Cargine, som idag är Freevalve.</li>
                            <li>Testning och utveckling av bränsleventil till Volvos MD13 och MD16 motorer.</li>
                        </ul>
                    </div>
                    {<br />}
                </div>
                {<br />}{<br />}

                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        1998-2003 LPI Engineering till Finnveden Engineering</span>{<br />}
                    I februari 1998 började jag på LPI Engineering i Lidköping. Samma år, i mars 1998, blev jag förälder och
                    framtiden såg väldigt ljus och harmonisk ut.
                    Hösten 1999 köptes LPI av Finnveden Powertrain. Ett dotterbolag till 
                    <a href="https://sv.wikipedia.org/wiki/Finnveden_AB" target="_blank" rel="noreferrer"> Finnveden AB </a>
                    som var ett företag med nästan 3000 anställda när de var som störst.{<br />}{<br />}
                    Några av de projekt jag var involverad i och vi genomförde var: {<br />}
                    {<br />}
                    <div style={{ marginLeft: "5px" }}>
                        <ul style={{ listStyle: "disc" }}>
                            <li>Montagecell för bilbältesspänne till Autoliv i Vårgårda.</li>
                            <li>Tillverkningscell för Ablaufstück som var en komponent för ett common rail-system för
                                dieselmotorer i lastbilsstorlek. </li>
                            <li>Robotgripdon för LPI och hantering av Volvo kingpin(främre hjulaxel). </li>
                            <li>Filterpress för Analysen i Lidköping.</li>
                        </ul>
                    </div>
                    {<br />}
                    Företaget vi arbetade för i Lidköping bytte namn från LPI Engineering till Finnveden Engineering
                    efter att Finnveden köpte oss 1999.
                    I juni 2003 sålde Finnveden företaget till Mastec, ett företag med ägare från IT-branschen.
                    De som tog över Finnvedens tillverkningsanläggning i Lidköping och även ingenjörskontoret.{<br />}{<br />}
                    Jag och 3 st till fick erbjudandet att följa med Finnveden Powertrain till en ny arbetsplats på Ljungmansgatan
                    i Lidköping.
                </div>
                {<br />}{<br />}
                <div class="contentFull">
                    <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                        1993-1998 Rekordverken, Öttum</span>
                    {<br />}
                    1993 avslutades utbildningen till Maskiningenjör vid Högskolan i Skövde. Jag hade tidigare sommarjobbat
                    på Rekordverken i Öttum där jag efter högskolan fick jobb som konstruktör/ritare.
                    Jag tog med mig kunskaper om CAD/CAM om framför allt Autocad. Detta kom väl till pass när Rekordverken
                    köpte det konkurrerande företaget Svegma som hade två CAD-stationer som blev det nya sättet att
                    dokumentera ritningar.{<br />}
                    {<br />}
                    <img src={fyrkantsbalsinplastare} class="picsFull" alt="Fyrkants inplastare" />
                    Under tiden på rekordverken var jag ansvarig för framtagningen av kvalitetsmanualen för ISO 9001, som sedan blev grunden för
                    företagets första kvalitetscertifikat enl. denna standard. Detta var ju inte ett enmans arbete men jag skötte pappersarbetet.
                    {<br />}{<br />}
                    Ett rolig avtryck jag fick göra i företaget, var att 1992 uppfinna en princip för att rotera en kvadrat runt ett givet centrum.
                    Vilket var kärnan i konstruktionen av företagets fyrkantsbalsinplastare.
                    {<br />}{<br />}Se patent <a href="https://tc.prv.se/spd/search?lang=sv&tab=1" target="_blank" rel="noreferrer">SE 9201060-2 </a>
                    i den svenska patentdatabasen.{<br />}
                    <CustomLink to='/record'>Record Q-Pack</CustomLink>
                </div>
                <h2 className='copyright'>Copyright© Lars Karlqvist</h2>
            </center>
        </div>
    )

    function Reset(){
        return(
            <Route path='/mystory' element={<Mystory />} />
        )
    }

    function CustomLink({ to, children, ...props }) {
        return (
            <Link to={to} {...props}>
                {children}
            </Link>
        )
    }
}
