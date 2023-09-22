import React from "react";

import "./About us.css"
import img from"./img/c1.jpg"
function Scale(){
    return(
        <>
        <div className="container  " style={{fontFamily:"poppins"}}>


            <div className="row ">
                <div className="col-md-12">
                    
                </div>
            </div>
            </div>

            <div className="container-fluid row-pic" id="sc">
            
            <div className="row  img-fluid p-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-4  mt-5">
                    <div className="card card-style mt-5 p-4 ">
                        <div className="card-body w-100">
                        <image src={require ("./img/c1.jpg")} alt="image" class="img-fluid rounded-circle"/>
                        <h2 className="card-title py-2">Lenny Rorla </h2>
                        <p className="card-text-center">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 p-4">
                     <div className="card card-style p-4 ">
                        <div className="card-body">
                        <image src={img} alt="image" class="img-fluid rounded-circle"/>
                        <h2 className="card-title py-2">Ronny Rossy </h2>
                        <p className="card-text -center">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint.</p>
  
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mt-5 p-4">
                    <div className="card card-style mt-5 p-4">
                        <div className="card-body">
                       <image src={require ("./img/c1.jpg")} alt="image" class="img-fluid rounded-circle"/>
                        <h2 className="card-title py-2">Eleveny petum </h2>
                        <p className="card-text-center">  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. </p>
  
                        </div>
                    </div>
                </div>
                
                </div>
    </div>

    </>

    )
}
export default Scale;