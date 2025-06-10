import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar(){

    return (
        <div className='navbar'>
            <img src={logo} alt="This is my logo which is my name with an initialized Y." />
            <ul className='menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='connect'>Get In Touch</div>
        </div>
    )
}

export default Navbar