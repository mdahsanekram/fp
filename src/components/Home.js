import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/styles.css';
import { Nav, NavDropdown,Navbar } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import IMAG from './image/img1.jpg';
import IMAG1 from './image/img2.cms';
import BF from './image/brakefast.svg';
import POOl from './image/pool.svg';
import GAR from './image/garden.svg'

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  

export class  Home extends Component{

    constructor(props)
    {
        super(props)
        {

        }
    }


    render()
    {

    
    return(
        

        <div className="containerfluid">         

            <div className="navbar-expand-md navbar-dark bg-dark navbarh">
                <div className="row ctex">
                    <div className="col-xl-2 col-md-2 col-sm-2">

                    </div>


                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center ">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">HOME</h5>
                            </li>
                        </ul>

                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">ABOUT</h5>
                            </li>
                        </ul>

                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">ROOMS</h5>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">SERVICES</h5>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">GALLERY</h5>
                            </li>
                        </ul>

                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">SEE&DO</h5>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12">

                    <ul className="navbar-nav navbar-right mr-auto text-center">
                            <li className="nav-item">
                                <h5 className="nav-link" href="#">CONTACT</h5>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-1 col-md-12 col-sm-12 ctex">
                    <ul className="navbar-nav navbar-right mr-auto text-center ctex">
                    <li className="nav-item ctex">
                            <button className="ctex text-center useButton" >Secondary</button>
                        </li>    
                    </ul>

                    </div>
                    <div className="col-xl-2 col-md-2 col-sm-2">

                    </div>
                </div>
            </div>

            <div className=" navbar-expand-md navbar-prime bg-prime navbarh home1">
            <div className="row ctex">
                    <div className="col-xl-4 col-md-4 col-sm-4">
                    
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4 cent">
                    <h1 >Ferofly</h1>
                    <h5>
                    -Magnify your Journey-
                    </h5>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4">
                    
                    </div>
                        </div>
            </div>

            <div className="container">
            <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12">
                <img src={IMAG} width="1100" height="600" />
                </div>
            </div>
            </div>


            <div className="container">
            <div className="row ctex1">


            <div className="col-xl-3 col-md-3 col-sm-3">
            <p>Check in</p>
            
            </div> 
            

            <div className="col-xl-3 col-md-3 col-sm-3">
            <p>Check out</p>
            
            </div> 

            <div className="col-xl-2 col-md-2 col-sm-2">
            <p>Adults</p>
            
            </div> 

            <div className="col-xl-2 col-md-2 col-sm-2">
            <p>Kids</p>
            
            </div>

            <div className="col-xl-2 col-md-2 col-sm-2">
            <p></p>
            
            </div>

            </div>


            <div className="row ctex2 ">


            <div className="col-xl-3 col-md-3 col-sm-3">
            <input type="date"/>
                
            </div> 
            
                
            <div className="col-xl-3 col-md-3 col-sm-3">
            <input type="date"/>
                
            </div> 
            
            <div className="col-xl-2 col-md-2 col-sm-2">
             <input type="number"/>
                
            </div> 
            
            <div className="col-xl-2 col-md-2 col-sm-2">
            <input type="number"/>
                
            </div>
            
            <div className="col-xl-2 col-md-2 col-sm-2">
            <input type="submit"/>
                
            </div>            
            </div>            
            </div>

            <div className="container">
            <div className="row ">

            <div className=" col-12 text-center ctex2">
            <h3 >About</h3>
            </div>

            <div className=" col-12 text-center ">
            <p className=""><samp>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click <br/>
                “Edit Text” or double click me to add your own content and make changes to the font.<br/>
                Feel free to drag and drop me anywhere you like on your page. I’m a great place for,<br/>
                you to tell a story and let your users know a little more about you.</samp></p>
            </div>

            </div>
            </div>

            <div className="container">
            <div className="row img1">
            
                <div className="col-xl-12 col-md-12 col-sm-12">
                <img src={IMAG1} width="1100" height="600" />
                <div className="text-block">
                <h4 className="orroom">OUR ROOMS</h4>
                <p>I'm a paragraph. Click here to add your<br/>
                 own text and edit me. I’m a great place<br/>
                  for you to tell a story and let your <br/>
                  users know a little more about you.</p>
                  <button  className="alig" variant="outline-secondary ">Secondary</button>{' '}
                 </div>
                </div>
            </div>
            </div>

            <div className="container">
            <div className="row ">

            <div className=" col-12 text-center ctex2 ">
            <h3 >OUR SERVICES</h3>
            </div>

            
            <div className=" col-4 text-center img2">
            <img src={BF} width="40" height="30"  />
            <h5 >Breakfast</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2 ">
            <img src={GAR} width="40" height="30"  />
            <h5 >Garden</h5>
            <p className=""><samp>I'm a paragraph. Click here to add <br/>your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            <img src={POOl} width="40" height="30"  />
            <h5 >Pool</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>
            
            <div className=" col-4 text-center img2">
            <img src={BF} width="40" height="30"  />
            <h5 >Breakfast</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            <img src={GAR} width="40" height="30"  />
            <h5 >Garden</h5>
            <p className=""><samp>I'm a paragraph. Click here to add <br/>your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            <img src={POOl} width="40" height="30"  />
            <h5 >Pool</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>


            </div>
            </div>


            <div className="container">
            <div className="row ">

            <div className=" col-12 text-center ctex2">
            <h3 >GALLERY</h3>
            </div>

            <div className=" col-4 text-center ">
            <img src={IMAG} width="350" height="500" />
            </div>

            <div className=" col-4 text-center ">
            <img src={IMAG}  width="350" height="500" />
            </div>

            <div className=" col-4 text-center ">
            <img src={IMAG} width="350" height="500" />
            </div>

            </div>
            </div>



            <div className="container">
            <div className="row ">

            <div className=" col-12 text-center ctex2 ">
            <h3 >OUR SERVICES</h3>
            </div>

            
            <div className=" col-4 text-center img2">
            
            <h5 >Breakfast</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2 ">
            
            <h5 >Garden</h5>
            <p className=""><samp>I'm a paragraph. Click here to add <br/>your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            
            <h5 >Pool</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>
            
            <div className=" col-4 text-center img2">
            
            <h5 >Breakfast</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            
            <h5 >Garden</h5>
            <p className=""><samp>I'm a paragraph. Click here to add <br/>your own text and edit me.</samp></p>
            </div>

            <div className=" col-4 text-center img2">
            
            <h5 >Pool</h5>
            <p className=""><samp>I'm a paragraph. Click here to add<br/> your own text and edit me.</samp></p>
            </div>


            </div>
            </div>


            <div className="container">
            <div className="row img1">
            
                <div className="col-xl-12 col-md-12 col-sm-12">
                <img src={IMAG1} width="1100" height="600" />
                <div className="text-block">
                <h4 className="orroom">GUEST REVIEW</h4>
                <p>“I'm a paragraph. Click here to add your<br/>
                 own text and edit me. I’m a great place<br/>
                  for you to tell a story and let your users<br/>
                   know a little more about you.”</p>
                  <button  className="alig  useButton2" >Secondary</button>{' '}
                 </div>
                </div>
            </div>
            </div>

            <div className="container-fluid cent foot"> 
            <div className="row ">
            
                <div className="col-xl-12 col-md-12 col-sm-12">
                <h3 className="fh3">CONTACT US</h3>
                </div>
            </div>
            <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-4">
                <p className="fh3">info@mysite.com</p>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4">
                <p className="fh3">500 Terry Francois Street, San Francisco, CA 94158</p>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4">
                <p className="fh3">Tel: 123-456-7890 </p>
                </div>
            </div>


            <div  className="contactSection">
<div className="containe pt-5" id="contactBar">
  
  <div className="row mt-4 mb-4">
      <div className="col-md-6 offset-md-3">
          <div className="shadow-lg p-4" >
          
              <div className="form-group">                  
                  <input type="text" className="form-control" placeholder="Name*" name="Name"/>
              </div>

              <div className="form-group">                  
                  <input type="email" className="form-control" placeholder="Email*" name="Email"/>
                  
              </div>

              <div className="form-group">
                                    
                  <input type="text" className="form-control" placeholder="Subject" name="Mobile"/>
              </div>
              <div className="form-group">
                  
                <textarea name="massage" className="form-control" id="massage" cols="30" rows="10"></textarea>
                   {/* <input type="text" className="form-control" placeholder="Message" name="Message"/>  */}
              </div>
              <button  className="btn btn-dark mt-5 btn-block shadow-sm font-weight-bold " onclick="saveContactUS()">Send</button>
          </div>
      </div>
  </div>
</div>




<div class="mapsectiondiv">
        
        <div class="row">
            <div class="col-xl-12 col-lg- col-md-12 col-sm-12">
                
                        <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                    }
                />                    
            <div style={{ height: '100vh', width: '100%' }}>        
      </div>       
    </div>   
    </div>
    </div>
    
    </div>
    <div className="containerfilud">

<div className="row footerclass">

           <div className="col-xl-12 col-md-12 col-sm-12">

               <p className="text-white text-center copyright">© 2023 by Anton & Lily. Proudly created with Wix.com</p>

           </div>

</div>



</div>
     </div>


    
 </div>
 
    );

        }
};



export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
  })(Home);