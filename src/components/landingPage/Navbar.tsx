import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

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
        </nav>
    )
}

export default Navbar