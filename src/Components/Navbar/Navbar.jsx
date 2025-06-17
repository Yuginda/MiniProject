import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar(){
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='navbar'>
            <img src={logo} alt="This is my logo which is my name with an initialized Y." />
            <ul className='menu'>
                <li onClick={() => scrollToSection('hero')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About Me</li>
                <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
            <div className='connect' onClick={() => scrollToSection('contact')}>Get In Touch</div>
        </div>
    )
}

export default Navbar