
import Footer from './footer';
import Bounce from 'react-reveal/Bounce'
import Nav from './nav'
import './App.css';
const About = () => {
  return (
    <>
    <div className='Nav-bar'><Nav/></div>
      <div>
        <div className='about-img'>
          <img src={'./images/about/images (19).jpeg'} alt='about'/>
        </div>
            <div className='about-body'>
            <Bounce left duration={2000}>
              <div className='Welcome'>
              <div>
                <img src={'./images/images (12).jpeg'} alt=''/>
              </div>
              <div>
              <h2>Welcome to MK Wears</h2>
                 <span>At MK Wears we believe that fashion is an expression of individuality,
                 and every piece tells a unique story.Established in 2024,Our boutique has been curating 
                 timeless and trendy collections for fashion enthusiasts who seek a perfect blend style 
                 and sophistication</span>
              </div>
                 
              </div>
              <div className='Story'>
                <div>
                <h2>Our Story</h2>
                <span>Inspired by passion for fashion and desire to create distinctive shopping experience
                ,Michael Kimanzi founded MK Wears.What began as a small vision has now blossomed into a haven for those
                who appreciate the artistry of well-crafted clothing.Upto now we have created a large network
                across the country working with a group of hardworking friends</span>
                </div>
                <div>
                  <img src={'./images/our-story-lettering-handwritten-modern-calligraphy-text-abstract-watercolor-paint-splash-background-purple-orange-colored-153221837.jpg'} alt='about'/>
                </div>
                
              </div>
              <div className='Values'>
              <div>
                  <img src={'./images/7-Company-Values-Examples-Featured-Image.png'} alt='about'/>
                </div>
                <div>
                <h2>Our Values</h2>
                 <span>At MK Wears we are committed to quality,authenticity and customer satisfaction.Every piece in our
                 collection reflects our dedication to providing fashion that not only looks good but feels good too</span>
                </div>
              </div>
              <div className='Explore'>
             
                <div>
                <h2>Explore Our Collection</h2>
                <span>Discover a carefully curated selection of our products that is clothes,shoes,versatile accessories and more.
                Our collections are thoughtfully chosen to cater to diverse tastes,ensuring there's something for every
                fashion-forward individual</span>
                </div>
                <div>
                  <img src={'./images/unnamed.jpg'} alt='about'/>
                </div>
              
              </div>
              <div className='Exceptional'>
              <div>
                  <img src={'./images/1695666420644.jpeg'} alt='about'/>
                </div>
                <div>
                <h2>Exceptional Customer Experience</h2>
                <span>
                We pride ourselves on delivering a seamlessly and enjoyable shopping experience.Our team is here to assist
                you and our commitment to customer satisfaction is at the heart of everything.
                </span>
                </div>
              
              </div>
              <div className='Join'>
                <div>
                <h2>Join Us on This Fashion Journey</h2>
                <span>
                  We invite you to explore MK Wears and be part of our fashion journey.Whether you're seeking a wardrobe refersh or
                  a unique statement piece ,we're here to make your fashion dreams a reality.
                </span>
                </div>
                <div>
              <img src={'./images/631edf148a0469a7d9549b9b30a8a9d0.jpg'} alt='about'/>
                </div>
              </div>
              <div className='conclusion'>
              <div>
                  <img src={''} alt=''/>
                </div>
                <div>
                
                </div>
                <p>Thank you for choosing MK Wears where style meets personality</p>
              </div>
              </Bounce>
              </div>
            </div>
        <div className='about-footer'><Footer/></div>
        </>
  )
}

export default About;
