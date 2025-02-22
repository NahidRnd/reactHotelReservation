import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

function SimilarHotels( {id, location} ) {
    const {data, isLoading} = useFetch("http://localhost:3000/hotels", `host_location=${location}`);
    if(isLoading) <p>Loading Please wait.....</p>;

    const hotelIndex = data.findIndex(i => i.id === id);

    if (hotelIndex !== -1) {
      data.splice(hotelIndex, 1);
    }


  return (
    <div className="location-section">
      <div className="location-list ">
      {data.map((item) => {
        return (
          <div className="location-item" key={item.id}>
            <Link key={item.id} to={`/hotels/${item.id}`}>
              <img src={`../${item.medium_url}`} alt={item.name} />
            </Link>
            
            <p className="price">
                  € {item.price} / 
                  <span> night</span>
                </p>
            <div className="location-item-desc">
              <div className="location-item-text">
                <Link key={item.id} to={`/hotels/${item.id}`}>
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

export default SimilarHotels
