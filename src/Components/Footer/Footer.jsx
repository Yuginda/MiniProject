
import './Footer.css'
import signature from '../../assets/signature.jpg'

function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <img src={signature} alt="My signature which consists of a long R followed by the word yuginda" className="footer-signature"/>
      <div className="back-to-top" onClick={scrollToTop}>
        &uarr;
      </div>
      <p>&copy; {new Date().getFullYear()} Yuginda Ranawaka. All rights reserved.</p>
    </footer>
  )
}

export default Footer