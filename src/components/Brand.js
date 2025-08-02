import React, { useState } from 'react';
import BrndNav from './BrndNav';
import fatima from '../assests/images/fatima.svg';
import msg from '../assests/images/msg.svg';
import Msg from './Msg';
function Brand() {
  const [showLogin, setShowLogin] = useState(true);
  const handleClick = () => {
    setShowLogin(prev => !prev);
  };
  return (
    <div className='outer'>
      <div className='container mb-5'>
        <BrndNav />
        <div className="contain mt-3 d-flex justify-content-center">
          <img src={fatima} alt="Fatima" />
        </div>
        {showLogin && <Msg />}
        <div className="item d-flex justify-content-end">
          <img id="msg" src={msg} onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
