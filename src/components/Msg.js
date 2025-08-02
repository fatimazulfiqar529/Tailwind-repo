import React from 'react';
import './Msg.css'; // import the CSS file

function Msg() {
  return (
    <div className="msg">
        <div className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3'>
            <h2 id="login">Login</h2>
            <p id="trans">Login here using Username and Password</p>
            <input type="text" id="name" placeholder='Username'></input>
            <input type="password" id="pwd" placeholder='Password'></input>
            <button id="sign">Log in</button>
            <div class="d-flex justify-content-between gap-3">
                <button id="butt">Forget Password</button>
                <button id="butt">Sign In</button>
            </div>
            <p id="login"> For queries,kindly visit info@wurfelit.com</p>

        </div>
 
    </div>
  );
}

export default Msg;
