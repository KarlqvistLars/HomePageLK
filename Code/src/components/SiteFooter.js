import logofooter from "../assets/logo.png";
import './sitefooter.css';
// import './navbar.css';
import logo2 from '../logo.svg';


const SiteFooter = () => {
    return (
        <div className="Center">
            <div className="SiteFoot">
                <div>
                    <img src={logo2} className="App-logo" alt="logo" /><br />
                    <p>This site is built with <a href="https://react.dev/" target="_blank" rel="noreferrer" style={{color: "#fff"}}>React API</a><br />by<br />Lars Karlqvist</p>
                </div>
                <div style={{ maxWidth: "180vw" }}>
                    
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
                    <p>This site is built with <a href="https://react.dev/"  target="_blank" rel="noreferrer" style={{color: "#fff"}}>React API</a><br />by<br />Lars Karlqvist</p>
                </div>
                <div style={{ width: "300px" }}>
                    
                    {/* <p>"The natural liberty of man is to be free from any superior power on earth and not to be under the will or legislative authority of man, but to have only the law of nature for his rule."{<br/>}
                    {<br/>} - John Locke</p> */}
                </div>
                <div>
                    <p className="foot-logo">
                        <img src={logofooter} alt="Company Logo" srcSet="" />
                        <div style={{marginTop: "20px"}}>
                            Mobile: 0767-87 06 07
                        </div>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SiteFooter;