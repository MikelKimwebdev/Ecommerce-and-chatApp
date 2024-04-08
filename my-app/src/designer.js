import './App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Designers from './designer.json'
const designer = () => {
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
            Designers.map((design,index)=>
            <div className='Design-collection'>
               <div className='design-img'>
                <img src={process.env.PUBLIC_URL + design.Image} alt='design'/>
               </div>
               <div className='design-description'>
                  <div className='design-item'>{design.item}</div>
                  <div className='design-button'><button>View all products</button></div>
               </div>
            </div>
            )
        }
      </Carousel>
    </div>
  )
}

export default designer
