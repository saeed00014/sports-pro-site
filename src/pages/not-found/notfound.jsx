import { Link } from 'react-router-dom'
import './notfound.css'

const Notfound = () => {
  return (
    <section>
      <div className="notfound-container">
        <h1>404 The Page Yuo Are Looking For Is Not Found</h1>
        <Link to=''>Get Back TO Home Page</Link>
      </div>
    </section>
    )
}

export default Notfound