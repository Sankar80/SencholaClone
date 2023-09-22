import React from "react";
import {FaHeadset,FaHandPointRight} from "react-icons/fa6"
import {BsFillPersonFill} from "react-icons/bs"
import "./Service.css"
function Scale(){
    return(
        <>
        <div className="container  " style={{fontFamily:"poppins"}}>

            <div className="row ">
                <div className="col-md-12">
                    <div className="card-heading text-center p-5 m-5">
                        <h3 className="text-success">A BETTER WAY TO SCALE YOUR TEAM</h3>
                        {/* <p>Non laboris reprehenderit et pariatur cillum id. Occaecat esse consectetur quis aute laborum.<br/> Eu quis ut exercitation do tempor consequat cillum </p> */}
                    <p className="service-p">Lorem ipsum dolor sit amet consectetur. In cras nisi aliqsjuam phasellus blandit Erat velit maecenas consectetur eu..</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="container-fluid row-pic">
            
            <div className="row  img-fluid p-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-4  mt-5">
                    <div className="card card-style service-card1">
                        <div className="card-body w-100">
                        <p className="text-icon icona"><FaHeadset/></p>
                        <h2 className="card-title py-2">Talk With Our <br/>Specialist</h2>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu</p>
  
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-4">
                     <div className="card card-style service-card2">
                        <div className="card-body">
                        <p className="text-icon iconb"><BsFillPersonFill/></p>
                        <h2 className="card-title py-2">Talk With Our <br/> Specialist</h2>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu</p>
  
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mt-5 p-4">
                    <div className="card card-style service-card3">
                        <div className="card-body">
                        <p className="text-icon iconc">  <FaHandPointRight/></p>
                        <h2 className="card-title py-2">Talk With Our <br/> Specialist</h2>
                        <p className="card-text">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu</p>
  
                        </div>
                    </div>
                </div>
                
                </div>
    </div>

    </>

    )
}
export default Scale