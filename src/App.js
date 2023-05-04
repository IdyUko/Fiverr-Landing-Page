import React from "react";
import  './App.css'
import idy from './Images/search.png';
import hope from "./Images/review.png";


const App = () => {
  return(
    // <div className="body">
    //   <h1>Hello</h1>
    //   <p> My name is Ms Didy</p>
    //   <b>The names of the agbacorders of our class are Rachael, Miss Faith and Chelsea</b>
    //   <br/>
    //   <button>Join in</button>
    //   <input  placeholder="Please take this Sharwama for your hardwork"/>
    //   <br/>
    //   <i>React is a javascript library used for building user interface</i>
    // </div> 

<div class="Container">
    <div class="Hero"> 
        <div class="Header">
            <div class="leftNav">
                <div><b>fiverr</b></div>
                <div class="dot">.</div>
            </div>
            <div class="rightNav">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>$ USD</span>
                    <span>Become a seller</span>
                    <span>Sign in</span>
                    <button class="button">Join</button>
            </div>
        </div> 

        <div class="Herowrap">
            <div class="leftHero">
                
                <p>Find the perfect<i> freelance </i>services for your business</p> 
                <div class="inputhold">
                    <div class="searchicon"><img class="searchimg" src={idy}/></div>
                    <div class="input"><input type="search" placeholder= 'Try building a mobile app'  class="input"/></div>
                    <div class="search">search</div>
                </div>
                <div class="buttonNavs">
                    <div class="b1" >Popular:</div>
                    <div  class="b2">
                        <button class="button1">Website Design</button>
                        <button class="button2" >WordPress</button>
                        <button class="button3" >Logo Design</button>
                        <button class="button4" >NFT Art</button>
                    </div>
                </div>

            </div>

            <div class="rightHero">
                <div><img class="review" src={hope}/>
                <h5 >Didy, Video Editor</h5></div>
            </div>

        </div>  

    </div>

    <div class="Footer">
        <div class="footerNavs">
            <div>Trusted by:</div>
            <div>FACEBOOK</div>
            <div>Google</div>
            <div>NETFLIX</div>
            <div>P&G</div>
            <div>PayPal</div>
        </div> 
    </div> 

</div>
  )
};

export default App;