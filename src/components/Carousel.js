import React, {useState} from 'react'
import "./carousel.css";
import { imagesArr } from '../helper/CarouselData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {

    const [currentImg, setImg] = useState(2);

  return (
    <div className='carousel'>
      <div className='innerCarousel' style={{backgroundImage: `url(${imagesArr[currentImg].img})`}}>
        <div className='left'>
            <ArrowBackIosIcon onClick={() => {
                setImg(currentImg < 1 ? imagesArr.length-1 : currentImg-1)
            }}/>
        </div>
        <div className='center'>
            <h1 className='title'>{imagesArr[currentImg].title}</h1>
            <p className='subtitle'>{imagesArr[currentImg].subtitle}</p>
        </div>
        <div className='right'>
            <ArrowForwardIosIcon onClick={() => {
                setImg(currentImg > imagesArr.length-2 ? 0 : currentImg+1)

            }}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel
