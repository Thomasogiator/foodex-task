import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const Navbar: React.FC=()=>{
    return(
        <nav className='nav-container'>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <div className='nav-container-right'>
                <button>JOIN WAITLIST</button>
                <img src={hamburger} alt='menu'/>
            </div>
            <div className='nav-large'>
                <div>Home</div>
                <div>Join waitlist</div>
                <div>
                    <span><img src={facebook} alt="facebook" /></span>
                    <span><img src={twitter} alt="twitter" /></span>
                    <span><img src={instagram} alt="instagram" /></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar