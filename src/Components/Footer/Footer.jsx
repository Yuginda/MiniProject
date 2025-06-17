import './Footer.css'
import signature from '../../assets/signature.jpg'

function Footer() {
  return (
    <footer className="footer">
      <img src={signature} alt="My signature which consists of a long R followed by the word yuginda" className="footer-signature"/>
      <p>&copy; {new Date().getFullYear()} Yuginda Ranawaka. All rights reserved.</p>
    </footer>
  )
}

export default Footer