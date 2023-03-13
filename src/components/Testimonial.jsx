import { TiWeatherCloudy } from 'react-icons/ti'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { testimonials } from '../data'
import { useState } from 'react'
import image from '../images/avatar2.jpg'


const Testimonial = () => {
  let [index, setIndex] = useState(1)
  const {name, quote, job, avatar} = testimonials[index]

  const slideplus = () => {     
    setIndex(prev => prev + 1)

    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
  }

  const slideminos = () => {
    if (index < 1) {
      setIndex(4)
    }else {
      setIndex(next => next - 1)
    }
  }

  return (
    <div className="testi__main-container">
      <div className="testi-container">
        <div className="testi-top">
          <TiWeatherCloudy className='cloud-icon'/> <h3>Testimonials</h3>
        </div>
        <article className="testi-middle">
          <div className="middle__main-container">
            <div className="middle-container">
              <img src={image} className='profile-img'/>
              <p>{quote}</p>
              <h6>{name}</h6>
              <p>{job}</p>
            </div>
          </div>
          </article>
        <div className="testi-bottom">
          <button onClick={slideminos} className="arrow-btn"> 
            <AiOutlineArrowLeft />
          </button>
          <button onClick={slideplus} className="arrow-btn">
            <AiOutlineArrowRight/> 
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Testimonial