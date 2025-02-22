import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials/Testimonials';

function Reviews() {
  return (
    <div className="reviews container">
      <div className="rev-header">
        <div className="rev-title">
          <h2 className='title'>What Guests say about us</h2>
          <span>Some useful reviews from our guests on their experiences</span>
        </div>
        <div className="rev-all">
          <Link to="/testimonials">
            View All Reviews<ArrowForwardIosIcon />
          </Link>
        </div>
      </div>
      <Testimonials />
    </div>

  )
}

export default Reviews
