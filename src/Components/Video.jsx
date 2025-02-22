import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
// import videoUrl from 'https://www.youtube.com/watch?v=5ZxApiwDecQ';

function Video() {
  return (
    <div className="video">
      <div className="video-container">
        <Link to="https://www.youtube.com/watch?v=5ZxApiwDecQ" target="_blank">
            <PlayArrowIcon sx={{ fontSize: 110 }} />
        </Link>
      </div>
    </div>
  )
}

export default Video
