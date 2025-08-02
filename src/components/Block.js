import React from 'react';
import './Block.css';
import blockwurfel from '../assests/images/blockwurfel.svg';
import black from '../assests/images/black.svg'
import group325 from '../assests/images/Group325.svg'
import fullline from '../assests/images/fullline.png';


function Block(){
    return(
              <div className="block mt-5 pt-5 "
                style={{
    backgroundImage: `url(${blockwurfel})`,
    backgroundRepeat: "no-repeat",
  }}>
<div className='box d-flex justify-content-evenly '>
<div id="box1" className='d-flex flex-column justify-content-start align-items-start'>
    <p id="bold">Company</p>
    <p>About Wurfel</p>
    <p>Careers At Wurfel</p>
    <p>Testimonials</p>
    <p>Contact Us</p>
</div>
<div id="box1" className='d-flex flex-column justify-content-start align-items-start'>
    <p id="bold">Community</p>
    <p>Leadership</p>
    <p>Blog & Events</p>
    </div>
    <div id="box1" className='d-flex flex-column justify-content-start align-items-start'>
    <p id="bold">Services</p>
    <p>Website Development</p>
    <p>Branding</p>
    <p>Graphic Designing</p>
    <p>Content Marketing</p>
    <p>Social Media Marketing</p>
    </div>
<div id="box1" className='d-flex flex-column justify-content-start align-items-start'>
    <p id="bold">Phone No:</p>
    <p>+44 7771 743077</p>
    <p>Address:<br/>12 Delane Dr,Winnersh,<br/>Workingham RG41 5AT,UK
</p>
    <p>Email:<br/>info@wurfelit.com
    </p>
    </div>
    </div>
    <div className='d-flex justify-content-around mt-5'>
<img id="log" src={black}></img>
<img id="info" src={group325}></img>
    </div>
    <img id="full" className='ms-5 ps-5' src={fullline}></img>

</div>


   );
}
export default Block;