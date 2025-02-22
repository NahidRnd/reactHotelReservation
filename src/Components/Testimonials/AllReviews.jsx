import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import Testimonials from "./Testimonials"


function AllReviews() {
  return (
    <div>
    <Navbar />
    <div className="all-rev-page">
      <div className="reveiw__page-header">
        <div className="reveiw-container container">
          <div className="reveiw__title">
            <h2>All Reviews</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                Testimonials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="review__page-content container">
        <Testimonials />
        <Testimonials />
    </div>
    </div>
  )
}

export default AllReviews
