
import {useRef,useEffect} from 'react';

const ShopBtn = () => {
    const buttonRef=useRef;
    useEffect(()=>{
      const applyEffects=()=>{
        buttonRef.current.classList.add('effect-container')
      };
      const onClick=()=>{
        buttonRef.current.classList.remove("active")
        buttonRef.current.classList.add("active")
      }
      applyEffects();
      //add event listener on mount
      buttonRef.current.addEventListener('mouseup', onClick);
      //referencing the ref in the return function
      const cleanRef=buttonRef.current;
      cleanRef.addEventListener('mouseup',onClick)
    })
  return (
    <body>
        <div  className='Shop' ref={buttonRef}>
      <button>SHOP NOW</button>
    </div>
    </body>
    
  )
}

export default ShopBtn;
