import React from 'react';
import './Grid.css';
import researchh from '../assests/images/researchh.svg';
import starategy from '../assests/images/Starategy.svg';
import visual from '../assests/images/visual.svg';
import Position from '../assests/images/Position.svg';
import message from '../assests/images/message.svg';
import Design from '../assests/images/Design.svg';



function Grid() {
  return (
    <div>
    <div className='items ps-5 pt-5 d-flex justify-content-center gap-3'>
        <div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
            <img id="research" src={researchh} alt="Research Icon" />
            <h3 id="discover">Research & Discovery</h3>
< p id="business">
Our Experts Conduct Extensive Research To Understand Your Business, Competition, And Target Audience, Forming The Foundation For A Successful Branding Strategy.</p>
        </div>
<div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
            <img id="starategy" src={starategy} alt="Strategy icon" />
             <h3 id="strat">Brand Strategy</h3>
<p id="team">
Our Team Creates A Detailed Brand Strategy, Outlining Your Brand’s Mission, Vision, And Values, And Aligning Them With Your Business Objectives.</p>
        </div>
                      <div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
            <img id="visual" src={visual} alt="Visual icon" />
            <h3 id="vis">Visual Identity</h3>
< p id="team">
  We Design A Distinctive Visual Identity For Your Brand, Including Logo, Typography, And Color Palette, To Help Your Business Stand Out.
</p>
        </div>
    </div>
    <div className='items d-flex ps-5 justify-content-center mt-3 gap-3'>
                            <div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
            <img id="Position" src={Position} alt="Research Icon" />
            <h3 id="posit">Brand Positioning</h3>
<p id="expert">
Our Experts Define Your Brand’s Unique Selling Proposition And Position It Strategically To Differentiate It From Competitors And Resonate With Your Target Audience.

</p>
        </div>
          <div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
            <img id="message" src={message} alt="Research Icon" />
            <h3 id="msgg">Brand Voice & Messaging</h3>
<p id="voice">
We Create A Unique Brand Voice And Compelling Messaging That Speaks To Your Audience, Reflects Your Brand’s Personality, And Builds An Emotional Connection.
</p>
        </div>
    <div id="box" className='d-flex flex-column justify-content-center align-content-center align-items-center gap-3 pb-5 pt-5'>
   <img id="Design" src={Design} alt="Research Icon" />
   <h3 id="desig">Brand Guidelines</h3>
<p id="team">
Our Team Develops Comprehensive Brand Guidelines To Ensure Consistent Representation Of Your Brand Across All Platforms, Enhancing Brand Recognition And Trust.</p>
        </div>
    </div>
    </div>
  );
}
export default Grid;