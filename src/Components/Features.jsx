import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

function Features() {
  return (
    <div className="features container">
      <div className="feature-title">
        <h2 className="title">Our Features</h2>
        <span></span>
      </div>
      <div className="feature-list">
        <div className="feature-item">
            <div className="feature-icon">
                <SavingsOutlinedIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="feature-body">
                <h3>Best prices</h3>
                <p>
                    Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                </p>
            </div>
        </div>
        <div className="feature-item">
            <div className="feature-icon">
                <SupportAgentOutlinedIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="feature-body">
                <h3>Best prices</h3>
                <p>
                    Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                </p>
            </div>
        </div>
        <div className="feature-item">
            <div className="feature-icon">
                <ReviewsOutlinedIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="feature-body">
                <h3>Best prices</h3>
                <p>
                    Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                </p>
            </div>
        </div>
        <div className="feature-item">
            <div className="feature-icon">
                <TravelExploreOutlinedIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="feature-body">
                <h3>Best prices</h3>
                <p>
                    Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
