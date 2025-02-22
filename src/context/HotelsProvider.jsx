import { createContext, useContext } from "react"
import useFetch from "../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();

function HotelsProvider({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const room = JSON.parse(searchParams.get("options"))?.room;
    const service = searchParams.get("service");
    
    
    const { data:hotels, isLoading }= useFetch("http://localhost:3000/hotels", `city=${destination || ""}&bedrooms_gte=${room}&amenities=${service}`);   
    
  return (
    <HotelContext.Provider value={{hotels, isLoading}}>{children}</HotelContext.Provider>
  )
}

export default HotelsProvider;

export function useHotels(){
    return useContext(HotelContext);
}
