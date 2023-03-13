import './gallery.css'

const Gallery = () => {
  const images = require('../../images/gallery1.jpg')

 // for(let i = 1; 1 <= length; i++) {
  //  images.push(require(``))
  //}

  return (
    <div className="main__gallery-container">
      <div className="gallery-container">
        <div className="img-content">
          <img src={images} alt="all-text"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery