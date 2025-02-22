import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

function BestHotels() {
    const {data, isLoading} = useFetch("http://localhost:3000/hotels?_limit=3", "");
    if(isLoading) <p>Loading Please wait.....</p>;
  
  return (
    <div className="location-section container">
      <h2 className="title">Our Best Hotels</h2>
      <div className="location-list ">
      {data.map((item) => {
        return (
          <div className="location-item" key={item.id}>
            <Link key={item.id} to={`hotels/${item.id}`}>
              <img src={item.medium_url} alt={item.name} />
            </Link>
            
            <p className="price">
                  € {item.price} / 
                  <span> night</span>
                </p>
            <div className="location-item-desc">
              <div className="location-item-text">
                <Link key={item.id} to={`hotels/${item.id}`}>
                  <h4 className="location">{item.smart_location}</h4>
                </Link>
                <p className="name">{item.name}</p>
              </div>
                
                
            </div>
        </div>
        );
      })}
      </div>
    </div>
  )
}

export default BestHotels
