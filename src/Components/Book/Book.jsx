import React, { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { createSearchParams, useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useBook } from "../../context/BookProvider";

function Book() {
    
    const { destination, setDestination, date, setDate, options, setOptions }= useBook();

        const [openOptions, setOpenOptions] = useState(false);
        
        const [openDate, setOpenDate] = useState(false);
        const navigate = useNavigate();
    
        const handleOptions = (name, operation) => {
            setOptions((prev) => {
                return {
                    ...prev,
                    [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
                }
            })
        }
        const handleSearch = () => {
    
            const encodedParams = createSearchParams({
                date: JSON.stringify(date),
                destination,
                options: JSON.stringify(options),            
            });
            
    
            
            navigate({
                pathname: "/hotels",
                search: encodedParams.toString(),
            });
        };


        //Which Page ???
        const [homePage, setHomePage] = useState(false);
      
        const pageLoc = useLocation();
        const title = pageLoc.pathname;
      
        useEffect( ()=>{
      
          title === "/" ? setHomePage(true) : setHomePage(false);
        }, [title]
      
        );
    
  return (
    <div className="book">
        <div className="single-book">
            {`${!homePage ? "Book Your Hotel" : ""}`}
        </div>
        <label htmlFor="destination">{`${!homePage ? "Destination" : ""}`}</label>
                <div className="book-input">
                    <input type="text" value={destination} onChange={(e)=> setDestination(e.target.value)} placeholder="Where to go?" name="destination" id="destination" />
                </div>
        <label htmlFor="checkin">{`${!homePage ? "Chech In/Out" : ""}`}</label>
                <div className="book-input">
                    <input onClick={()=>setOpenDate(!openDate)} type="text" placeholder={`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`} name="checkin" id="checkin" />
                    {openDate && <DateRange onChange={(item) => setDate([item.selection])} ranges={date} className="date" minDate={new Date()} moveRangeOnFirstSelection={true} />}
                </div>
        <label htmlFor="guests">{`${!homePage ? "Guests" : ""}`}</label>
                <div className="book-input">
                    <input type="text" placeholder={`${options.Adult} Adult, ${options.children} children, ${options.room} room`} name="guests" id="guests" onClick={()=> setOpenOptions(!openOptions)} />
                    
                    {openOptions && <GustOptionList setOpenOptions={setOpenOptions} options={options} handleOptions={handleOptions} />}
                </div>
                <button className="btn" onClick={handleSearch}>
                Check Availability
                </button>
            </div>
  )
}

export default Book

function GustOptionList({options, handleOptions, setOpenOptions}){
    const optionRef = useRef();
    useOutsideClick(optionRef, "guests", () => setOpenOptions(false));
    return <div className="guest-options" ref={optionRef}>
        <OptionItem handleOptions={handleOptions} type="Adult" options={options} minLimit={1} />
        <OptionItem handleOptions={handleOptions} type="children" options={options} minLimit={0} />
        <OptionItem handleOptions={handleOptions} type="room" options={options} minLimit={1} />
    </div>
}

function OptionItem({options, type, minLimit, handleOptions}){
    return <div className="guest-option-item">
    <span className="option-text">{type}</span>
    <div className="option-counter">
        <button onClick={() => handleOptions(type, "dec")} className="option-counter-btn" disabled={options[type] <= minLimit}>-</button>
        <span className="option-counter-number">{options[type]}</span>
        <button onClick={() => handleOptions(type, "inc")} className="option-counter-btn">+</button>
    </div>
</div>
}