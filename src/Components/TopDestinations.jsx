import { Link } from "react-router-dom"
import top_dest_1 from '../../src/assets/img/t_amsterdam.jfif';
import top_dest_2 from '../../src/assets/img/t_paris.jfif';
import top_dest_3 from '../../src/assets/img/t_istanbul.jfif';
import top_dest_4 from '../../src/assets/img/t_rotterdam.jfif';
import top_dest_5 from '../../src/assets/img/t_brussels.jpg';


function TopDestinations() {
  return (
    <div className="top-dest container">
      <div className="dest-header">
        <h2 className="title">Top Destinations</h2>
        <span>
            Travelers search for cities are interested in these places
        </span>
      </div>
      <div className="dest-img-1">
        <div className="dest-img-item">
            <Link to={`city/5656`}><img src={top_dest_1} alt="" /></Link>
            <div className="caption">
                <Link to={`city/5656`}>Amsterdam</Link>
            </div>
        </div>
        <div className="dest-img-item">
            <Link to={`city/5657`}><img src={top_dest_2} alt="" /></Link>
            <div className="caption">
                <Link to={`city/5657`}>Paris</Link>
            </div>
        </div>
      </div>
      <div className="dest-img-2">
        <div className="dest-img-item h-2">
            <Link to={`city/5658`}><img src={top_dest_3} alt="" /></Link>
            <div className="caption">
                <Link to={`city/5658`}>Istanbul</Link>
            </div>
        </div>
        <div className="dest-img-item h-2">
            <Link to={`city/5659`}><img src={top_dest_4} alt="" /></Link>
            <div className="caption">
                <Link to={`city/5659`}>Rotterdam</Link>
            </div>
        </div>
        <div className="dest-img-item h-2">
            <Link to={`city/5655`}><img src={top_dest_5} alt="" /></Link>
            <div className="caption">
                <Link to={`city/5655`}>Brussels</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopDestinations
