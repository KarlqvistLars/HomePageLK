import logofooter from "../assets/logo.png";
import examenYA from "../assets/FotoFromExamYA.jpg"
import './sitefooter.css';
// import './navbar.css';
import logo2 from '../logo.svg';


const SiteFooter = () => {
    return (
        <div className="Center">
            <div className="SiteFoot">
                <div>
                    <img src={logo2} className="App-logo" alt="logo" /><br />
                    <p>This site is built with <a href="https://react.dev/" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>React</a><br />by<br />Lars Karlqvist</p>
                </div>
                <div style={{ maxWidth: "180vw" }}>
                    <img src={examenYA} alt="Examen YA" className="picsFoot"/>
                    <p>Examensdagen</p>
                </div>
                <div>
                    <p className="foot-logo">
                        <img src={logofooter} alt="Company Logo" srcSet="" />
                        <br /><br />
                        Mobile: 0767-87 06 07
                    </p>
                </div>
            </div>

            <div className="MobileFoot">
                <div>
                    <img src={logo2} className="App-logo" alt="logo" /><br />
                    <p>This site is built with <a href="https://react.dev/" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>React</a><br />by<br />Lars Karlqvist</p>
                </div>
                <div style={{ width: "300px" }}>
                    <img src={examenYA} alt="Examen YA" className="picsFoot"/>
                    <p>Examensdagen</p>
                  </div>
                <div>
                    <p className="foot-logo">
                        <img src={logofooter} alt="Company Logo" srcSet="" />
                        <div style={{ marginTop: "20px" }}>
                            Mobile: 0767-87 06 07
                        </div>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SiteFooter;