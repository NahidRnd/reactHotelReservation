import { Link } from "react-router-dom"
import { useHotels } from "../../context/HotelsProvider"
import HotelsFilter from "./HotelsFilter";
import { useRef, useState } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import useFetch from "../../Hooks/useFetch";
import Icon from '@mui/material/Icon';
import Footer from "../Footer";



function Hotels() {
  const { data:services, isLoading:serLoading} = useFetch("http://localhost:3000/services","");
  if(serLoading) <p>Loading...</p>
  const [openSort, setOpenSort] = useState(false);
  const {hotels, isLoading} = useHotels();  
  const sortRef = useRef();
  useOutsideClick(sortRef, sortRef, () => setOpenSort(false));

  if(isLoading) <p>Loading...</p>

  /***************VIEW ***************/
  const [listView, setListView] = useState(true);

  const handleListView= () => {
    setListView(true)
  }

  const handleGridView = () => {
    setListView(false)
  }
  /***************VIEW ***************/

  /***************DRAG ***************/
  const journalRef = useRef(null);
  const Draggable = ({ innerRef, rootClass = "", children }) => {
    const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });
    const [isScrolling, setIsScrolling] = useState(false);
    const handleDragStart = (e) => {
        if (!ourRef.current) return
      const slider = ourRef.current.children[0];
        const startX = e.pageX - slider.offsetLeft;
        const startY = e.pageY - slider.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
        document.body.style.cursor = "grabbing"
      }
      const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!ourRef.current) return
        document.body.style.cursor = "default"
      }
      const handleDrag = (e) => {
        if (!isMouseDown || ! ourRef.current) return;
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        const walkY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
        slider.scrollTop = mouseCoords.current.scrollTop - walkY;
        console.log(walkX, walkY)
      }
  
    return (
      <div className="drag" ref={ourRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag} >
        {children}
      </div>
    );
  };
  /***************DRAG ***************/

  /*************** SORT ***************/

  /*************** SORT ***************/


    
  return (
    <div className="hotel-search">
      <div className="hotel-search__page-header">
        <div className="container page-header-container">
          <div className="hotel-search__title">
            <h2>Hotel Search</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                Search
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container hotel-search__page-content">
        <div className="hotel-search__sidebar">
         <HotelsFilter />
        </div>
        <div className="hotel-search__content">
          <div className="room-bar">
            <span className="room-res">
              <strong>{hotels.length}</strong> rooms found
            </span>
            <span className="room-view">
              <span className="view-txt">View </span>         
              <span className={`view-btn ${ listView ? "active" : ""}`}  onClick={handleListView}><Icon>format_list_bulleted</Icon></span>
              <span className={`view-btn ${ !listView ? "active" : ""}`} onClick={handleGridView}><Icon>grid_on</Icon></span>
            </span>
            <span className="room-sort">
              <div className="dropdown-toggle" id="sort" onClick={()=> setOpenSort(!openSort)}>
                Sort by: Default
                <Icon>keyboard_arrow_down</Icon>
              </div>
              <ul className={`sort-dropdown ${openSort ? "open" : ""}`} ref={sortRef}>
                <li className="sort-option">
                  <a href="#">Sort by: Lowest Price</a>
                </li>
                <li className="sort-option">
                <a href="#">Sort by: Highest Price</a>
                </li>
                <li className="sort-option">
                <a href="#">Sort by: Default</a>
                </li>
              </ul>
            </span>
          </div>
          <div className={`rooms ${ !listView ? "grid-view" : ""}`}>
          {
        hotels.map( item => {
          return <div key={item.id} className={`room-item ${ !listView ? "item-grid" : ""}`}>
              <div className="room-img">
                <img src={item.medium_url} alt={item.name} />
              </div>
              <div className="room-det">
              <Link key={item.id} to={`/hotels/${item.id}`}>
                <h2>{item.name}</h2>
              </Link>
              <p>
                {item.description}
              </p>
              <div className="icons">
              <Draggable innerRef={journalRef} rootClass={"drag"}>
                <div className="drag-scroll" ref={journalRef}>
                {item.amenities.map((ser,i)=>
                  {  
                    const service = services.find((el)=> {
                      return el.service_name === ser
                    })
                    if(!service) return <div key={i} className="icon-item">
                    <Icon>hotel</Icon>  
                  </div> 
                    return <div key={i} className="icon-item">
                      <Icon>{service.icon}</Icon>  
                    </div> 
                  }
                )}   
                </div>
              </Draggable>
              </div>
              </div>
              <div className="room-price">
                <div className="room-price-det">
                  <div className="room-price-num">
                    € {item.price}
                    <span>PER NIGHT</span>
                  </div>
                  <button className="btn">BOOK NOW</button>
                </div>
                <div className="room-price-link">
                  <Link to={`/hotels/${item.id}`}>
                    Check Availibility
                  </Link>
                </div>
              </div>
            </div>
          })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hotels

