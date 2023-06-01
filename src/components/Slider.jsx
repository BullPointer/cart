import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Images } from '../database/images';
import { divStyle } from './jsStyling';


export const SingleSlider = () => {

    return (
      <div className="slide-container">
        <Slide>
         {Images.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ 
                ...divStyle, 
                backgroundImage: `url(${slideImage.url})` 
              }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

