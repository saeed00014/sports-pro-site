import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import FAQ from './FAQ'

const Footer = () => {
  return (
    <footer>
      <div className="footer__main-container">
        <article className='first-article'>
          <Link to=''>
            <img src={logo} alt="ff" />
          </Link>
          <p>
          To insert an icon, add the name of the icon class to any inline HTML element. The and elements are widely used to add icons.
          </p>
          <div className="web-icons">
            <a href="https://www.linkedin.com/"> <FaLinkedinIn className='web-icon'/> </a>
            <a href="https://www.facebook.com/"> <FaFacebookF className='web-icon'/> </a>
            <a href="https://www.Twitter.com/"> <BsTwitter className='web-icon'/> </a>
            <a href="https://www.instagram.com/"> <AiOutlineInstagram className='web-icon'/> </a>
          </div>
        </article>
        <article className='sec-article'>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article className='third-article'>
          <h4>Insight</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Case Studios</Link>
          <Link to='/s'>Events</Link>
          <Link to='/s'>communities</Link>
          <Link to='/s'>FAQs</Link>
        </article>
        <article className='fourth-article'>
          <h4>Get In Touch</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/s'>Support</Link>
        </article>
      </div>
      <div className="footer-bottom">
        <small>2023</small>
      </div>
    </footer>
  )
}

export default Footer