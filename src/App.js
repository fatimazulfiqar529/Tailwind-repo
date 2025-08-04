import React from "react";
import "./App.css";
import ground from './images/ground.png';
import backg from './images/backg.png';

function App() {
  return (
    <div className="container mt-5 pt-5 ps-2">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav d-flex justify-content-start gap-3 w-100">
<li className="nav-item">
  <a id="title" className="nav-link" href="#">
    <i className="fa-solid fa-rocket">GoStartup</i></a>
</li>
<ul className="navbar-nav d-flex justify-content-center gap-3 w-100">
<li className="nav-item">
  <a id="home" className="nav-link" href="#">Home</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Features</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Pages</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Support</a>
</li>
</ul>
<ul className="navbar-nav d-flex justify-content-end gap-3 w-100">
<li className="nav-item">
    <button id="button">Sign In</button>
</li>
<li className="nav-item">
        <button id="btn">Sign Up</button>
  
</li>
</ul>

            </ul>
          </div>
        </nav>
        <div className="item d-flex justify-content-between w-100">
        
        <div className="first">
        <button className="mt-5 ps-3 pe-3 d-flex justify-content-start gap-1" id="head">
        
          <i id="icon" class="fa-solid fa-circle pt-2"></i>Tailwind Template for Startups</button>
        <h1 id="heading" className="mt-5 pt-5">Digital Solutions For <br/>Your <span id="busniess">Busniess</span> </h1>
<p id="desc" className="mt-4">Tailwind CSS is a utility-first framework that lets you style elements using pre-defined classes directly in HTML. It speeds up development, ensures design consistency, and makes creating responsive, modern interfaces simple. Its customization options allow you to adapt designs to any brand or style.</p>
<div className="d-flex justify-content-start gap-4">
  <button id="button" className="d-flex justify-content-start gap-1">
   Get Started <i id="start" className="fas fa-arrow-right pt-1"></i></button>
     <button id="btn"  className="d-flex justify-content-start gap-1">
   <i id="work" className="fas fa-caret-right pt-1"></i>How it work</button>
</div>
</div>
<div className="second" >
  <img id="image1" src={ground} 
  />
  <img  id="image2"src={backg}/>
</div>
</div>
</div>
    );
}

export default App;


