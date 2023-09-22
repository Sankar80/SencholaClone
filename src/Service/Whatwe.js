import React from "react";
import {MdArrowForwardIos} from "react-icons/md"
import {BiBarChartAlt2} from "react-icons/bi"
import {PiCurrencyCircleDollar} from "react-icons/pi"
import {TbHexagon} from "react-icons/tb"
import {LuBarChartHorizontalBig} from "react-icons/lu"
import {BsShopWindow} from "react-icons/bs"
import {FaCopy} from "react-icons/fa"
import whatwe from "./Img/Rectangle 4590.png"
import "./Service.css"

function Whatwe(){
    return(
        <div className="container pt-5" >
            <div className="row ">
                <div className="col-12 col-md-7 col-lg-7 pt-4">
                    <div className="container ">
                    
                    <div className=" container pl-4 ">
                        <img src={whatwe} alt="whatwe" className="img-fluid p-4" />
                        
                
                    <div className="row ">
                    <div className="col  "> 
                    <div className="logo-card1 ">
                    
                            <p><span className="logo1"><LuBarChartHorizontalBig/></span>Logo Design</p>
                            <p><span className="logo2"><FaCopy/></span>Poster Design</p>
                            <p><span className="logo3"><BsShopWindow/></span>Business Card</p>
                            
                    
                    </div>
                    
                        
                    
                    </div>
                    <div className="col">
                    <div className=" logo-card2 ">
                
                            <p><span className="logo1"><TbHexagon/></span> Product Marketing</p>
                            <p> <span className="logo2"><PiCurrencyCircleDollar/></span>Influencer Marketting</p>
                            <p> <span className="logo3"><BiBarChartAlt2/></span>Content Marketting</p>
                            
                    
                        </div>
                         </div>
                    </div>
                        
                    </div> 
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                     <div className="container p-3">
                        
                        <h5 className="card-title text-success"> What We Do</h5>
                        <h1 className="card-title py-2">We Help Companies Scale With Vetted, Expert Talent & Resources </h1>
                        <p className="card-text text-muted" >  Sit laboris ipsum non eu sint laboris do aliquip mollit deserunt ea voluptate sint. Sint minim laborum labore eiusmod. Est velit cupidatat deserunt eu </p>
                        
    <div className=" pt-3 "> <button type="button " className="btn btn-success  " style={{borderRadius:"20px"}}>Contact us<MdArrowForwardIos/></button>
</div>
</div>
                    
                    </div>
                </div>
</div>
    

    )
} export default Whatwe