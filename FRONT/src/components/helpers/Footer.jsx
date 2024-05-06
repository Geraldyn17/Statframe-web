import './Footer.css'
import logo from "../../assets/LOGOPNG.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className='socialMedia'>
                <FaInstagram className='socialMediaIcon'/>
                <FaFacebook className='socialMediaIcon' />
                <FaSquareXTwitter className='socialMediaIcon'/>
                </div>
                <hr />
                <div className='more'>
                    <ul className='infoList'>
                        <li>Soporte</li>
                        <li>Violencia</li>
                        <li>Interaccion de Usuario</li>
                    </ul>
                </div>
                <hr />
                <img className='imgLogo' src={logo} alt="" />

                
            </footer>
        </div>
    )
}
export default Footer