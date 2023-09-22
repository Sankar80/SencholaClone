import React from "react";
import { Figure} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About us.css"
import Food1 from "./img/Rectangle 4623.png"
import Food2 from "./img/Rectangle 4621.png"
import Food3 from "./img/Rectangle 4622.png"


const Aboutus  =() => {
    return (
        <div class="banner-card" >
            <img src={ require ("./img/Rectangle 4620.png")} />
          <div class="banner-text">
            <h4> We are the Best company for<br/>
              Your business ready to take your <br/>
              Brand sky high
            </h4>
            <div className="left">
            <button> LEARN MORE</button> 
            </div> 
            </div>
            <div>
              <container>
              <section className='d-flex mt-5 pt-4'>
            <div className='me-5'id="ab">
            <h3 className='mb-4 text-start tb'>About Senchola</h3>
                <p>Nulla in est amet incididunt commodo. Labore amet est aliquip velit anim culpa. Reprehenderit irure eiusmod mollit tempor consequat enim reprehenderit ullamco irure velit. Mollit consectetur voluptate do sunt est. Esse proident non elit do irure laboris do Lorem amet.

Rt.<br/>
<br/>
 .

Do duis elit consequat qui reprehenderit in commodo non.<br/> 
<br/>
 
              Ut adipisicing aliquip veniam minim enim Lorem et velit consectetur ad irure ipsum. Voluptate adipisicing pariatur duis dolor proident labore ad est. Adipisicing eu dolor commodo ut duis deserunt minim. Non reprehenderit ipsum eu reprehenderit occaecat anim cupidatat excepteur sunt pariatur deserunt. Nulla minim officia sit laboris nulla occaecat minim dolore nulla. Consequat nisi deserunt dolore incididunt adipisicing reprehenderit sit veniam nisi excepteur irure. Nulla cupidatat voluptate dolor sunt.
               </p>
                <div className="left">
            <button> VIEW MORE</button> 
            </div> 
        </div>
            <Figure className='mt-4'>
                <Figure.Image
                    className='mb-3' 
                    style={ { width:'15em',height:'13em'}}                    
                     src={Food1}
                     alt='Foodimg1' 
                />
                <Figure.Image
                    className='ms-4 mb-3'
                     style={ { width:'15em',height:'13em'}}                    
              src={Food2}
                    alt='Foodimg1' 
                />
                <Figure.Image
                    className='ms-4 mb-3'
                     style={ { width:'15em',height:'13em'}}                    
                     src={Food3}
                    alt='Foodimg1' 
                />
               </Figure>
        </section>
              </container>
             </div> 
             <div className="team " >
            <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>GLOBAL MANAGED SERVICE</h2>
                        <p>Non laboris reprehenderit et pariatur cillum id. Occaecat esse consectetur quis aute laborum. Eu quis ut exercitation do tempor consequat cillum et irure nulla laboris.
                    </p>
                    </div>
                </div>
            </div>

            <div class="row">
                     
                <div class="col-12 col-md-4 col-lg-4">
                
                    <div class="card text-left">
                        <div class="card-body">
                         <h3 class="card-title py-2">Marketing</h3>
                        <p class="card-text"> Excepteur fugiat aliqua veniam commodo eiusmod est elit dolor commodo Lorem ea reprehenderit.Aute consectetur nisi anim ea officia do irure occaecat Lorem. </p>
                       <br/>
                       <ul>
                       <li>Costomer Service</li><br/>
                       <li>Technical support</li><br/>
                       <li>Sales</li>
                       </ul>
                      
                        <div className="right">
            <button> VIEW MORE-></button> 
            </div> 
             </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <div class="card text-left">
                        <div class="card-body" >
                        <h3 class="card-title py-2">Sales Agency</h3>
                        <p class="card-text">Non velit id amet fugiat laboris.Proident eiusmod incididunt officia ut aliquip anim occaecat minim proident culpa.</p>
                        <br/>
                        <ul>
                       <li>Costomer Service</li><br/>
                       <li>Technical support</li><br/>
                       <li>Sales</li>
                       </ul>
                        <div className="right">
            <button> VIEW MORE-></button> 
            </div> </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <div class="card text-left">
                       
                        <div class="card-body">
                        <h3 class="card-title py-2">Back Office</h3>
                        <p class="card-text">Excepteur fugiat aliqua veniam commodo eiusmod est elit dolor commodo Lorem ea reprehenderit.Aute consectetur nisi anim ea officia do irure occaecat Lorem.</p>
                        <br/>
                        <ul>
                        <li>Costomer Service</li><br/>
                        <li>Technical support</li><br/>
                        <li>Sales</li>
                        </ul>
                        <div className="right">
            <button> VIEW MORE-></button> 
            </div>  
                        </div>
                    </div>
                </div>
                 </div>
      </div>  <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="card text-left">
                        <div class="card-body">
                           <h3 class="card-title py-2">RPO</h3>
                        <p class="card-text">  Excepteur fugiat aliqua veniam commodo <br/>
                        eiusmod est elit dolor commodo 
                          <br/> Lorem ea reprehenderit.<br/>
                          Aute consectetur nisi anim ea officia do irure occaecat Lorem.</p>
                        <br/>
                        <ul>
                       <li>Costomer Service</li><br/>
                       <li>Technical support</li><br/>
                       <li>Sales</li>
                       </ul>
                        <div className="right">
            <button> VIEW MORE-></button> 
            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="card text-left">
                        <div class="card-body">
                         <h3 class="card-title py-2">Cllent  Mangged</h3>
                        <p class="card-text">Excepteur fugiat aliqua veniam commodo<br/>
                         eiusmod est elit dolor commodo
                          Lorem ea reprehenderit.<br/>
                          Aute consectetur nisi anim ea officia do irure occaecat Lorem.</p>
                        <br/>
                        <ul>
                       <li>Costomer Service</li><br/>
                       <li>Technical support</li><br/>
                       <li>Sales</li>
                       </ul>
                        <div className="right">
            <button> VIEW MORE-></button> 
            </div> 
                        </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
    
  
)

}
export default Aboutus
    
