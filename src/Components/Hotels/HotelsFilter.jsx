import { useState } from "react";
import useFetch from "../../Hooks/useFetch"
import Book from "../Book/Book";
import RangeSlider from 'react-range-slider-input';
import { createSearchParams, Navigate, useNavigate, useOutletContext, useParams, useSearchParams } from "react-router-dom";
import { useHotels } from "../../context/HotelsProvider";
import { useBook } from "../../context/BookProvider";


function HotelsFilter() {

  const { destination, setDestination, date, setDate, options, setOptions }= useBook();
  
  const [price, setPrice] = useState(1);
  const [service, setService] = useState("");
  const { data:services, isLoading} = useFetch("http://localhost:3000/services","");


  if(isLoading) <p>Loading...</p>

  const handleSlider = (min, max) => {
  console.log("min");

    setPrice(price);
  }

  const handleService = (id, name) => {
    setService((prev)=>{
      return { 
        ...prev, 
        [id]: name
      }
    })
  }

  const navigate = useNavigate();

  const handleFilter = () => {
    const encodedParams = createSearchParams({
      price,
      service: JSON.stringify(service),
      destination,
      options: JSON.stringify(options),    
      date: JSON.stringify(date),       
  });
    console.log("param");
    console.log(encodedParams.toString());
    
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
  });
  }
  
  
    
  return (
    <div className="hotel-filter">
      <div className="book-det">
        <h2>Booking Details</h2>
      </div>
      <Book />
      <div className="price-filter">
        price slider
        <RangeSlider handleSlider={handleSlider} price={price} />
      </div>
      <div className="service-filter">
        <div className="service-filter-header">
          <h3>Included Services</h3>
        </div>
        <div className="service-filter-body">
          {
            services.map((item, index) => {
              return <div className="service-item" key={index}>
                <input type="checkbox" key={index} name={item.service_name} id={item.id} onChange={(e) => handleService(e.target.id,e.target.name)} /> 
                  {item.service_name}
                </div>  
            })}
        </div>
      </div>
      <div className="btn" onClick={handleFilter}>
        Apply Filter
      </div>
    </div>
  )
}

export default HotelsFilter
