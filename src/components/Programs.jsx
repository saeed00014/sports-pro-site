import { FaCrown, FaReact } from 'react-icons/fa'
import { programs } from '../data'
import { Link } from 'react-router-dom'
import '../pages/home/home.css'

const Programs = () => {

  return (
    <section>
    <div className="crown-container">
      <div className="crown-icon">
        <FaCrown className='crown'/>
        Programs
      </div>
    </div>
      <div className="programs__main-container">
          {programs.map((pro) => { 
            return (
              <div className="programs-container">
                <div className="main-program">
                  <div className="program-icon">
                    <FaReact />
                  </div>
                  <h2>{pro.title}</h2>
                  <p>{pro.info}
                  </p>
                  <Link to={pro.path}>Learn more</Link>
                </div>
              </div>
                )
              })
          }   
      </div>
    </section>
  )
}

export default Programs 