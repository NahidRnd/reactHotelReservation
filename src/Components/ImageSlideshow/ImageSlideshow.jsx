import { Slide } from 'react-slideshow-image';

function ImageSlideshow( {images} ) {

  return (
    
        <Slide>
        {images.map((item, index) => 
        {

            return (
                <div className="each-slide-effect">
                    <div key={index} style={{ 'backgroundImage': `url(${item})` }}>
                    <span>Slide {index}</span>
                    </div>
                </div>
            );
            
        })}

    </Slide>
    
  )
}

export default ImageSlideshow
