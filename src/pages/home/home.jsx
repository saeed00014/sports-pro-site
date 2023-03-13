import Header from "../../components/Header"
import './home.css'
import Programs from "../../components/Programs"
import Values from "../../components/Values"
import FAQ from "../../components/FAQ"
import Testimonial from "../../components/Testimonial"

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Programs />
      <Values />
      <FAQ />
      <Testimonial />
    </div>
  )
}

export default Home