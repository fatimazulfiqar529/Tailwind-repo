import React from 'react';
import './Solution.css';
import Group135 from '../assests/images/Group135.svg'
import g22 from '../assests/images/g22.svg';
import grp169 from '../assests/images/grp169.svg';
function Solution(){
    return(
        <div className="box  d-flex flex-column justify-content-center align-items-center text-center gap-3">
<p id="head">Every Brand is Unique.So Are Our Solutions</p>
<img id="line" src={Group135}></img>
<p id="para">We Specialize In Various Types Of Branding, Each With Unique Advantages. These Include Corporate Branding For Broad Appeal, Product Branding For Distinct Identities, Personal Branding For Individuals, Service Branding Emphasizing Quality, And Cultural Branding Resonating With Specific Groups.</p>
       <div className='d-flex justify-content-center gap-3'>
        <button id="button">Check Our Portfolio
            <img id="g22" src={g22}></img>
        </button>
          <button id="button">Free Consultation
            <img id="g22" src={grp169}></img>
        </button>
       </div>
        </div>
    );
}
export default Solution;