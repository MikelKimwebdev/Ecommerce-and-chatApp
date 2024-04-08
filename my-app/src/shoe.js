import './App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Shoes from './shoe.json'

const secondRow = () => {
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <div>
      <Carousel responsive={responsive} showDots={true}  customTransition="all .5" dotListClass="custom-dot-list-style">
       {
        Shoes.map((shoe,index)=>
        <div className='shoe-item'>
          <div className='shoe-img'>
            <img src={process.env.PUBLIC_URL + shoe.image} alt='shoe-type'/>
          </div>
          <div className='shoe-description'>
            <div className='shoe-type'>{shoe.item}</div>
            <div className='shoe-info'>{shoe.Description}</div>
            <div className='shoe-button'><button>View all products</button></div>
          </div>
        </div>
        )
       }
      </Carousel>
    </div>
  )
}

export default secondRow
