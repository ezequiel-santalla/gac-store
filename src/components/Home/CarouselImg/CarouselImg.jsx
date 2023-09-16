import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '/carousel1.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  const carouselStyle = {
    backgroundColor: 'black'
  }

  return (
    <div style={carouselStyle}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className='w-100' src={carousel1} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className='w-100' src={carousel1} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className='w-100' src={carousel1} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ControlledCarousel
