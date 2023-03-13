import './plans.css'
import { plans } from '../../data'
import {TiTickOutline} from 'react-icons/ti'
import Header from "../../components/Header-back"
import image from '../../images/header_bg_4.jpg'

const Plans = () => {
  return (
    <section>
      <Header title='Our Produts' image={image} text='We Give You The N'/>
      <div className="plans-container">
        <div className="plans-content">
          {plans.map((plan) => {
            const features = plan.features
            return (
              <div key={plan.id} className="plan-content">
                <h1>{plan.name}</h1>
                <small>{plan.desc}</small>
                <h1 id='price'>{`$${plan.price}`}<p>/mo</p></h1> 
                {features.map((fea , index) => {
                  const opa = fea.available
                  return (
                    <div key={index}>
                      <h3 >{opa &&  <><span ><TiTickOutline /></span>{fea.feature}</>}</h3>
                      <h3 className='unavailable'>{!opa && <><span id="tick">{''}</span>{fea.feature}</>}</h3>
                    </div>
                  )
                })}
                <div className='buy-btn'>
                  <span id='tick'></span><button>Buy The Plan</button>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Plans