import { faqs } from "../data"
import FAQs from "./FAQs"
import {FaQuestion} from 'react-icons/fa'

const FAQ = () => {
  return (
    <section className="faqs__main-container">
      <div className="section-content">
        <div className="section-head">
          <FaQuestion className="question-icon"/> FAQs
        </div>
        <div className="faqs-content">
            {faqs.map((faq) => {
              return (
                <FAQs key={faq.id} question={faq.question} answer={faq.answer}/>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default FAQ