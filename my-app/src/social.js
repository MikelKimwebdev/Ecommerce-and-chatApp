
import { socials } from "./socialmedia"
import './App.css'
const Social = () => {
  return (
    <>
    <div className='social-page'>
      { socials.map((social,socialIndex)=>
      <>
      <div className="social-links">
      <ul className="socials" key={socialIndex}>
        <li><img src={process.env.PUBLIC_URL + social.icon} alt="social-icon"/></li>
      </ul>
      </div>
      </>
      )}
    </div>
    </>
 
  )
}

export default Social;
