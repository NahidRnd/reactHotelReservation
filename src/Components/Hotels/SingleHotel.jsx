import { Link, useParams } from "react-router-dom"
import useFetch from "../../Hooks/useFetch";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import Book from "../Book/Book";
import {StarIcon} from '@heroicons/react/24/solid'
import user1 from "../../assets/img/user8.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user1-1.jpg";
import SimilarHotels from "./SimilarHotels";
import Icon from '@mui/material/Icon';
import Footer from "../Footer";



function SingleHotel() {
  const { id } = useParams();
  const { data, isLoading} = useFetch(`http://localhost:3000/hotels/${id}`,"");
  const { data:serviceList, isLoading:serLoading} = useFetch("http://localhost:3000/services","");
  
  let services = (data.amenities)? data.amenities : ["services"];
  services = services.slice(0, 11);

  if(isLoading) <p>Loading Please wait.....</p>;
  if(serLoading) <p>Loading Please wait.....</p>;

  return (
    <div className="single-hotel">
      <div className="single-hotel__page-header">
        <div className="container page-header-container">
          <div className="single-hotel__title">
            <h2>{data.name}</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
              <li>
                {data.name}
              </li>
            </ul>
          </div>
          <div className="single-hotel__price">€ {data.price}<span>per night</span></div>
        </div>
      </div>
      <div className="container single-hotel__page-content">
        <div className="single-hotel__content">
          <div className="single-hotel__images">
            <div className="single-hotel__images_big">
              <img src={img1} alt="hotel image" />              
            </div>
            <div className="single-hotel__images_small">
              <img src={img2} alt="hotel image" />
              <img src={img3} alt="hotel image" />
              <img src={img4} alt="hotel image" />
              <img src={img5} alt="hotel image" />
            </div>
          </div>
          <div className="single-hotel__desc">
            {data.description}
          </div>
          <div className="services-title">
              <h3>Hotel Facilities</h3>
            </div>
          <div className="single-hotel__services">
            
          {
            services.map((item, index) => {
                const service = serviceList.find((el)=> {
                  return el.service_name === item
                })
                if(!service) return <div key={index} className="icon-item">
                <Icon>hotel</Icon>  
              </div>      
              return (
                <div key={index} className="service-item">
                  <span className="service-icon">
                    <Icon>{service.icon}</Icon>  
                  </span>
                  <span className="service-text">
                    {item}  
                  </span>
                  </div>
              );
          })} 
          </div>
          <div className="similar-hotels">
            <h3>Similar Hotels</h3>
            <SimilarHotels id={data.id} location={data.host_location} />
          </div>
        </div>
        <div className="single-hotel__sidebar">
          <Book />
          <div className="sidebar-review">
            <div className="review-header">
              <span className="review-num">8.6</span>
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <StarIcon className="review-icon" />
              <span className="review-views">(2,400 reviews)</span>
            </div>
            <div className="review-body">
              <div className="review-body-top">
                <img src={user1} alt="review" />
                <span className="review-name">
                Aybars furkan
                <p className="review-date">jun 24</p>
                </span>
              </div>
              <div className="review-comment">
              Otelin Temizliği gayet iyiydi. personel güler yüzlüydü herşey için teşekkür ederiz
              </div>
            </div>
            <div className="review-body">
              <div className="review-body-top">
                <img src={user2} alt="review" />
                <span className="review-name">
                Ersen Emir
                <p className="review-date">jul 2022</p>
                </span>
              </div>
              <div className="review-comment">
              İlgili güleryüzlü resepsiyonla başlayan konaklama üzerine tanımam. Teşekkurler
              </div>
            </div>
            <div className="review-body">
              <div className="review-body-top">
                <img src={user3} alt="review" />
                <span className="review-name">
                Abdülbaki
                <p className="review-date">feb 2024</p>
                </span>
              </div>
              <div className="review-comment">
              Güleryüzlü personel, isteklerin ananda karşılanması.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleHotel
