import React from "react";
import "./Service.css"
import {MdArrowForwardIos} from "react-icons/md"
import card1 from "./Img/Rectangle 4588.png"
import card2 from "./Img/Rectangle 4588-1.png"
import card3 from "./Img/Rectangle 4588-2.png"
import card4 from "./Img/Rectangle 4588-3.png"
import card5 from "./Img/Rectangle 4588-4.png"
import card6 from "./Img/Rectangle 4588-5.png"
function Service(){
    return(

<>

          <div className="container">


            <div className="row">
                <div className="col-md-12">
                    <div className="card-heading text-center justify-content p-5 m-5">
                        <h2 className="text-success">OUR SERVICES</h2>
                        {/* <p className="justify-content">Non laboris reprehenderit et pariatur cillum id. Occaecat esse consectetur quis aute laborum.<br/> Eu quis ut exercitation do tempor consequat cillum et irure nulla laboris.</p> */}
                        <p className="w-10 service-p" style={{}}>Lorem ipsum dolor sit amet consectetur. Semper hendrerit in maecenas feugiat habitasse scelerisque. Sit egestas nec</p>
                    </div>
                </div>
            </div>
 
            <div className="row ">
                <div className="col-12 col-md-4 col-lg-4 p-3">
                    <div className="card ">
                        <div className="card-body w-100">
                            <img src={card1} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>Website Design & Development</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        <p className=" text-success text-end " >View More <MdArrowForwardIos/></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-3">
                     <div className="card ">
                        <div className="card-body">
                            <img src={card2} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>Logo & Banner Designing</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        <p className=" text-success text-end " >View More <MdArrowForwardIos/></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-3">
                    <div className="card ">
                        <div className="card-body">
                            <img src={card3} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>Android App Development</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu  </p>
                        <p className=" text-success text-end" >View More <MdArrowForwardIos/></p>
                        </div>
                    </div>
                </div>
                
        
    </div>

    <div class="row ">
    <div className="col-12 col-md-4 col-lg-4 p-3">
                    <div className="card ">
                        <div className="card-body">
                            <img src={card5} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>Wordpress Development</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        <p className=" text-success text-end" >View More <MdArrowForwardIos/></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-3">
                    <div className="card ">
                        <div className="card-body">
                            <img src={card4} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>Content Marketing</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        <p className=" text-success text-end" >View More <MdArrowForwardIos/></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-3">
                    <div className="card ">
                        <div className="card-body">
                            <img src={card6} alt="image" className="img-fluid " />
                        <h5 className="card-title py-2"><b>IOS App Development</b></h5>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        <p className=" text-success text-end " >View More <MdArrowForwardIos/></p>
  
                        </div>
                    </div>
                </div>     
    </div>
    <div className=" text-center pt-4 "> <button type="button " className="btn btn-success  " style={{borderRadius:"20px"}}>View More Services<MdArrowForwardIos/></button>
</div>
    

          
      </div>


</>
    )
}
export default Service