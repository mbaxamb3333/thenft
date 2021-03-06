import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import Footer from './components/Footer';
import Manifesto from './components/Manifesto';
import Header from './components/Header';
import Banner from './components/Baner';
import Popup from './components/Popup';
import { useState } from 'react';
import { ethers } from "ethers";

function App() {
const [buttonPopup, setButtonPopup] = useState(false);








return (
  <Fragment>
    {/* <Header/> */}
    <header>


        <div class="container">

            <div class="top_nav_area"> 

            <div class="nav">



                <div class="nav-header">

                    <div class="nav-title">

                        <a href="#"><img src="https://raw.githubusercontent.com/mbaxamb3333/nftist/b520b1544719bc59dd5e7d55f76d74f59fbaa585/logo.svg" alt=""/>  </a>  

                    </div>

                </div>


                <div class="nav-links">

                
                    {/* <a id= "mint" class="menu_button mint">Buy NFTs</a> */}

                    <a id="mint"class="menu_button mint" onClick={() => setButtonPopup(true)} >Buy NFTs</a>
                    

            

                    </div>


                </div>

        </div>

</div>

</header>






    <section id="baner">

<div class="container">

  <div class="row">

      <div class="abner_left" class="wow fadeInUp" data-wow-duration="2s">

          <h1>WELCOME IN OUR EXCLUSIVE
              COMMUNITY. YOU ARE THE NFTiST. </h1>

          <h5>Support and Grow Together. </h5>

          <a id="mint"class="mint" onClick={() => setButtonPopup(true)} >Buy NFTs</a>
          {/* <button class="container" ></button> */}
          {/* <button id = 'mint'className='mint' onClick={() => props.setTrigger(false)}>Buy NFTs</button> */}

  

      </div>

      <div class="baner_right">

          <img src="https://raw.githubusercontent.com/mbaxamb3333/nftist/main/NFTs.png" alt=""/>

      </div>

  </div>

</div>

</section>



    <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}/>

    <Manifesto/>
    <Footer/>
  </Fragment>
);
}

export default App;
