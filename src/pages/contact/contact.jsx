import BackgroundHeader from "../../images/header_bg_2.jpg"
import Header from "../../components/Header-back"
import './contact.css'

import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <>
      <Header image={BackgroundHeader} title='Get In Thouch' text="Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your projec"/>
      <section>
        <div className="section__main-container">
          <div className="section-container">
            <a href="https://wa.me/+989010276284"> <BsWhatsapp /> </a>
            <a href="mailto:saeed00014@gmail.com" target="_blank" rel="noreferrer noopener"> <AiOutlineMail /> </a>
            <a href="https://t.me/seed" target="_blank" rel="noreferrer noopener"> <TbBrandTelegram /> </a> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact