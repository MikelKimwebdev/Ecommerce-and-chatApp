
import Zoom from 'react-reveal/Zoom';
import './App.css';
import Nav from './nav'
import Social from './social'
import Footer from './footer';
import Carousel from './productCarousel';
import SecondRow from './shoe';
import Designer from './designer'
const Home = () => {
  const ShopNow =()=>{
    window.location.pathname='/allProducts'
  }
  return (
    <>
     <div className='Nav-bar'><Nav/></div>
    <div className='homepage'> 
    <header>
      <div className='description'>
        <p>Discover curated elegance at our online boutique</p>
        <span>Shop from your comfort with your pc</span>
        <button onClick={ShopNow}>SHOP NOW</button>
        <div className='Cart'>
        <img src={'./images/process/1702101812713.png'} alt='cart'/>
        </div>
        <div className='Operation'>
          <img src={'./images/process/1702101812818.jpeg'} alt='choose'/>
          <img src={'./images/process/1702101812643.png'} alt='Order'/>
          <img src={'./images/process/1702101812788.jpeg'} alt='Deliver'/>
          <img src={'./images/process/1702101812588.jpeg'} alt='Secure-payment'/>
          <img src={'./images/process/1702101812770.jpeg'} alt='Appreciate'/>
          <img src={'./images/process/1702101812552.jpeg'} alt='offer'/>
        </div>
      </div>
    </header>
    <body className='Home-body'>
    <Carousel/>
    <div className='left-home'>
      <div className='platforms'>
      <Social/>
    </div>
    </div>
    <Zoom top duration={1500}>
    <div className='Firstline'></div>
    <div className='shoe-carousel'>
      <SecondRow/>
    </div>
    <div className='secondline'></div>
    <div className='design-carousel'>
      <Designer/>
    </div>
    </Zoom>
    </body>
    <div className='footer-area'><Footer/></div>
    </div>
    </>
  )
}

export default Home;
