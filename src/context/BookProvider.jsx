import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


const BookContext = createContext();

function BookProvider({children}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [destination, setDestination] = useState(searchParams.get("destination") || "");
  const [options, setOptions] = useState({Adult:1, children:0, room:1,});
  const [date, setDate] = useState([
      {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }
  ]);


  return (
    <BookContext.Provider value={{destination, setDestination, options, setOptions, date, setDate}}>{children}</BookContext.Provider>
  )
}

export default BookProvider;

export function useBook(){
    return useContext(BookContext);
}