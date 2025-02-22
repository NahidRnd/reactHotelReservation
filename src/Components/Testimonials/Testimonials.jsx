import {StarIcon} from '@heroicons/react/24/solid'
import user1 from "../../assets/img/user8.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user1-1.jpg";

function Testimonials() {
  return (
    <div className="testimonial">
        <div className="testimonial-item">
            <div className="comment">
                <h3>Nice Place</h3>
                <div className="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p>
                Fantastic location in a historic renovated monastery in the heart of the Castro. Staff were helpful and knowledgeable and everything in easy walking distance.
                </p>
            </div>
            <div className="author">
                <img src={user1} alt="Testimonial" />
                <div className="author-info">
                    <h5>Beth Cardon</h5>
                    <span>Rome, Italy</span>
                </div>
            </div>
        </div>
        <div className="testimonial-item">
            <div className="comment">
                <h3>Good Choice</h3>
                <div className="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p>
                Extremely nice environment, the room was great, the service was awesome, really helpful and great service I'll visit them again in the near future.
                </p>
            </div>
            <div className="author">
                <img src={user2} alt="Testimonial" />
                <div className="author-info">
                    <h5>Beth Cardon</h5>
                    <span>Rome, Italy</span>
                </div>
            </div>
        </div>
        <div className="testimonial-item">
            <div className="comment">
                <h3>Perfect Website</h3>
                <div className="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p>
                The owner and staff were extremely helpful and kind and took time to ensure that we had extra information on things to do in the area and places to visit.
                </p>
            </div>
            <div className="author">
                <img src={user3} alt="Testimonial" />
                <div className="author-info">
                    <h5>Beth Cardon</h5>
                    <span>Rome, Italy</span>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Testimonials
