import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselProducts from './carousel.json';
const productCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
        },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
  <Carousel responsive={responsive} showDots={true}  customTransition="all .5" dotListClass="custom-dot-list-style">
  {
    CarouselProducts.map((item,index) =>
      <div className='carousel' key={item.id}>
        <div className='carousel-image'><img src={process.env.PUBLIC_URL + item.Image} alt='item'/></div>
        <div className='carousel-description'>
          <div className='item-type'>{item.Item}</div>
          <div className='description'>{item.Description}</div>
          <div className='view-btn'><button>View all Products</button></div>
        </div>
      </div>
    )
  }
</Carousel>;
    </div>
  )
}

export default productCarousel
