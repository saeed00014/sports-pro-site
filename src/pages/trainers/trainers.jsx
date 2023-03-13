import Header from "../../components/Header-back"
import BackgroundHeader from '../../images/header_bg_5.jpg'
import { trainers } from "../../data"
import './trainers.css'

const Trainers = () => {
  return (
    <section>
      <Header image={BackgroundHeader} title='Your Trainers' text='We Have The Best support And Exprieced Trainers'/>
      <div className="section__t-container">
        {trainers.map(({id, image, name, job, socials}) => {
          return(
          <div key={id} className="section__t-content">
            <div className="img__t-container">
              <img src={image} alt="" />
              <div className="social-details">
                <h1>{name}</h1>
                <p>{job}</p>
                <div className="social-links">
                  <a href={socials[0]}>ins</a>
                  <a href={socials[1]}>twi</a>
                  <a href={socials[2]}>fac</a>
                  <a href={socials[3]}>lin</a>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  )
} 

export default Trainers