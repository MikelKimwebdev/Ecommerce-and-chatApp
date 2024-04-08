import React from 'react'
import './App.css'
const Righthome = () => {
  return (
    <>
      <div className='categories'>
        <div className='officials'>
             <div className='shape-outer Official'>
             <img src={'./images/categories/images (2).jpeg'} alt='official'/>
             </div>
             <div className='shape-outer ladies-official'>
             <img src={'./images/categories/images (1).jpeg'} alt='ladies-official'/>
             </div>
             <div className='official-description'><p>Unleash your inner Confidence with our formal 
             attire.Elavate your wardrobe to new heights of timeless elegance and sophistication.</p></div>
             </div>
          <div className='casuals'>
             <div className='shape-outer Casual'>
             <img src={'./images/categories/1 (1).jpg'} alt='casual'/>
             </div>
             <div className='shape-outer ladies-casual'>
             <img src={'./images/categories/images (4).jpeg'} alt='ladies-casual'/>
             </div>
             <div className='casual-description'><p>Rediscover Comfort with a Touch of Trendy.Our<br/> casual
             wear collection seamlessly combines <br/> the ease of everyday wear with the latest fashion<br/> trends,
             ensuring you look and feel your best.</p></div>
             </div>
             
          <div className='sports'>
             <div className='shape-outer Sports'>
             <img src={'./images/categories/striped-tracksuits-sports-outfit-sets-lestyleparfait-kenya-1.jpg'} alt='sports'/>
             </div>
             <div className='shape-outer ladies-Sports'>
             <img src={'./images/categories/images (13).jpeg'} alt='ladies-sports'/>
             </div>
             <div className='sports-description'><p>Dominate the field with our cutting-edge sports gear 
             .Our performance-driven equipment is designed to give you the winning edge ,so you can push your 
             limits and achieve greatness.</p></div>
             </div>
             </div>
             <div className='offer-info'></div>
    </>
  )
}

export default Righthome;
