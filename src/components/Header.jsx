import { Link } from "react-router-dom"
import image from '../images/main_header.png'
import './navbar.css'

const Header = () => {
  return (
    <header className="main__header">
        <div className="main__header-container">
          <div className="main__header-left">
            <div className="main__header-left-content">
             <h4>#100DaysOfWorkOut</h4>
              <h1>Join The Legends Of 
                The Fitness World </h1>
             <p>learn about the best diets 
              and work outs you can do at home
              fastest way ever
             </p>
             <Link to="/plans" className="btn-lg">
                Get started
             </Link>        
            </div>
          </div>
          <div className="main__header-right">
             <div className="main__header-image">
             <div className="main__header-circle"></div>
              <img src={image}  alt="Main Header Image" />
             </div>
          </div>
      </div>
    </header>
  )
}

export default Header


