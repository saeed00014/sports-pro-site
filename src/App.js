import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"


import Navbar from "./components/Navbar"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Gallery from "./pages/gallery/gallery"
import Home from "./pages/home/home"
import Notfound from "./pages/not-found/notfound"
import Plans from "./pages/plans/plans"
import Trainers from "./pages/trainers/trainers"

const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path={"/plans/*"} element={<Plans />}/>
        <Route path="/trainers" element={<Trainers />}/>
        <Route path="/*" element={<Notfound />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App