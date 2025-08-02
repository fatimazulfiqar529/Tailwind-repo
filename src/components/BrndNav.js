import React from 'react';
import comp  from '../assests/images/comp.png';
import('./BrndNav.css');


function BrndNav() {
  return (
    <div className='items ps-5 pt-5'>
 <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex justify-content-around w-100">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img id="logo" src={comp} alt="company.logo"></img>
              </a>
            </li>
            <div className= "d-flex justify-content-end gap-3 mt-4 ">
            <li className="nav-item">
              <a className="nav-link" id="first" href='#'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="second" href='#'>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#'>
                <div class="dropdown" id="third">
  <button id="drop" type="button" class="btn dropdown-toggle pt-0" data-bs-toggle="dropdown">
    Services
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Web Development</a></li>
    <li><a class="dropdown-item" href="#">Graphic Design</a></li>
    <li><a class="dropdown-item" href="#">Artificial Intelligence</a></li>
    <li><a class="dropdown-item" href="#">Machine Learning</a></li>
    <li><a class="dropdown-item" href="#">App Development</a></li>


  </ul>
</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="fourth" href='#'>Our Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="five" href='#'>Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="six" href='#' >Contact Us</a>
</li>
            <li className="nav-item">
              <a className="nav-link mt-n3" href="#">
                <button id="btn" >
                    Get Quote
                </button>
              </a>
</li>

            </div>
          </ul>
        </div>
      </nav>
      
</div>
  );
}










export default BrndNav;
