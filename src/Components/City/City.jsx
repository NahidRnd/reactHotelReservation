import { useParams } from "react-router-dom"
import useFetch from "../../Hooks/useFetch";

function City() {
    const {id} = useParams();
    const { data:city , isLoading} = useFetch(`http://localhost:3000/city/${id}`,"");
    if(isLoading) <p>Loading Please wait.....</p>;

    const images = (city.images)? city.images : ["images"];

  return (
    <div className="city-single">
      <div className="city-header">  
        <div className="city-img">
            <img src={(city.images)? city.images[0]: ""} alt="" />
            <div className="city-name container">
                <h2>{city.city_name}</h2>
            </div>
        </div>
      </div> 
      <div className="city-body container">
        {
            images.slice().reverse().map((item, index) => {
                console.log(item);
                
            return(
            <div key={index} className="city-body-desc">
                {city.description}
                <div className="city-body-img">
                    <img src={item} alt="" />
                </div>
            </div>         
            );
        })}
        {city.description}
      </div>
    </div>
  )
}

export default City
