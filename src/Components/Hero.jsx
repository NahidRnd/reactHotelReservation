import '../Style.css';
import Book from "./Book/Book";

const Hero = () => {

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Book your stay and enjoy a luxury experience</h1>
        <p>
          Future-Proof Your Business, Innovative Solutions for a Digital World,
          Elevate Your Business, Simplify Your Life
        </p>
        <Book />

        
      </div>
    </div>
  );
};
export default Hero;
