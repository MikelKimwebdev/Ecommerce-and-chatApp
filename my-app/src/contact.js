
import Nav from './nav'
import Footer from './footer';
import Bounce from 'react-reveal/Bounce'
const Contact=()=>{
  return (
    <>
    <div>
          <div className='Nav-bar'><Nav/></div>
        </div>
        <div className='contact-img'>
        <img src={'./images/contact/images (28).jpeg'} alt='contact'/>
        </div>
        <div>
        <div className='contact-boxes'>
        <Bounce left duration={2000}>
        <div className='location-box'>
          <img src={'./images/contact/9356230.png'} alt='location'/>
          <p>Our Main Office</p>
          <span>Currently In Nairobi</span>
        </div>
        <div className='contact-box'>
        <img src={'./images/contact/images (3).png'} alt='contact'/>
          <p>PHONE NUMBER</p>
          <span>0743133301 <br/>0105190830</span>
        </div>
        <div className='email-box'>
        <img src={'./images/contact/4672500.png'} alt='email'/>
          <p>EMAIL</p>
          <span>kimanzimichael748@gmail.com</span> 
        </div>
        </Bounce>
        </div>
        <Bounce left duration={2000}>
        <div className='submit-box'>
          <h2>Contact Us</h2>
          <div className='submit-name'>
          <input placeholder='Enter your name'/>
          </div>
          <div className='submit-email'>
          <input placeholder='Enter your valid Email address'/>
          </div>
          <div className='submit-textarea'>
          <textarea></textarea>
          </div>
          <button type='submit'>Submit</button>
        </div>
        <div className='opinion'>
        <img src={'./images/contact/images (26).jpeg'} alt='opinion'/>
        </div>
        </Bounce>
  </div>
    <div className='contact-footer'><Footer/></div>
   </>
)
}
export default Contact;