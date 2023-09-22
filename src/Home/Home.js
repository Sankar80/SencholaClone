import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import '../Home/Home.css'
import yellowtsrt from './Senchola University images (1)/Senchola images1/3/guy-lesson 2.png' 
import modelgirl from './Senchola University images (1)/Senchola images1/1/Rectangle 4584.png'
import Rectangle from './Senchola University images (1)/Senchola images1/3/Rectangle 18.png'
import groupofpeople from './Senchola University images (1)/Senchola images1/3/Rectangle 19.png'
import singleman from './Senchola University images (1)/Senchola images1/3/Rectangle 20.png'
import singlegirl from './Senchola University images (1)/Senchola images1/3/unsplash_0Zx1bDv5BNY.png'
import faceone from './Senchola University images (1)/Senchola images1/4/face 1-modified.png'
import facetwo from './Senchola University images (1)/Senchola images1/4/face 2-modified.png'

// import  from 'react-bootstrap';
import { Card,Button } from 'react-bootstrap';


import {IoPricetagOutline} from 'react-icons/io5'

import {BsFillPlayFill} from 'react-icons/bs'
import {RiMegaphoneFill} from 'react-icons/ri'
import {HiCodeBracketSquare} from 'react-icons/hi2'
import {HiCreditCard} from 'react-icons/hi2'


import {BiBookReader} from 'react-icons/bi'
import {BsLaptop,BsFillBriefcaseFill} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {TbBooks} from 'react-icons/tb'
import { RiPagesFill } from "react-icons/ri";
import { MdOutlineBusinessCenter, MdOutlineDeveloperMode } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlay,faAward} from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <div>
        <Container className='mt-5'>
            <Row>
                <Col className='col-6 col-lg-6 ms-5'>
                    <h2 className='heading'>Build Your Carrier with Senchola </h2>
                    <p className='para1 home-p'>Welcome to Lagos High school where raising self reliant and god-fearing children is our goal</p>
                    <div className='btnb'>
                        <button className='btttn'>LEARN MORE</button>
                    </div>
                </Col>
                <Col>
                    <img src={yellowtsrt} alt="Yellow tsht" className='yellowtsrt'/>
                </Col>
                
             </Row>

            <Row className='mt-5'>
                <Col>
                    <h3 className='Expl-pro text-center'>EXPLORE OUR PROGRAM</h3>
                    <div className='pro-all'>
                    <div className='program Explor'>
                    <BiBookReader className='sen-icon-book sen-icon-book1'></BiBookReader>
                        <h6 className='pro-head pro-head1 ms-5 mt-3'>Programs</h6>
                        <p className='para3'> we offer junior and senior secondary school programs...</p>
                        <button className='see-more-btn see-more-btn1 ms-5 mb-5'>SEE MORE</button>
                    </div>
                    <div className='pricing Explor'>
                    <IoPricetagOutline className='sen-icon-book sen-icon-book2' />
                        <h6 className='pro-head pro-head2 ms-5 mt-3'>Pricing</h6>
                        <p className='para3'> Our prices differ for various classes and also based on if students are...</p>
                        <button className='see-more-btn see-more-btn2 ms-5 mb-5'>SEE MORE</button>
                    </div>
                    <div className='Certifications Explor'>
                    <FontAwesomeIcon icon={faAward} style={{color: "#1a8618",}} className='sen-icon-book sen-icon-book3' />
                        <h6 className='pro-head pro-head3 ms-5 mt-3'>Certifications</h6>
                        <p className='para3'> Upon leaving the junior secondary, our students obtain the junior ...</p>
                        <button className='see-more-btn see-more-btn3 ms-5'>SEE MORE</button>
                    </div>
                    </div>
                </Col>
            </Row>

            
        </Container>
        <br /><br /><br /><br /><br />

        <div style={{background:'antiquewhite',marginBottom:'10%'}}>
        <Container>
          <Row>
            <Col md={5} style={{paddingTop:'15%',paddingBottom:'15%',textAlign:"start"}}>
              <h5><b>
                Expert Talent with<br/>Curated Resources<br/>& Support
              </b></h5>
              <p style={{fontSize:'0.9em'}}>
                we have the best facilities to ensure that<br/>
                student have the best experience while<br/>
                learning.we believe that practicals helps in<br/>
                fast learning
              </p>
              <Button className='ps-4 pe-4' variant='success' style={{fontSize:'0.72em',fontWeight:'500'}}>SEE MORE</Button>
            </Col>
            <Col xs={5} sm={5} md={3}>
              <Card style={{width:'120%',marginTop:'30%',background:'rgb(5, 95, 5)',textAlign:"start"}} className='shadow'>
                <Card.Body className='m-2 mb-3 mt-3'>
                  <TbBooks className='rounded-circle p-3' style={{color:'green',background:'white',fontSize:'4.8em'}}/>
                  <h6 className='mt-3' style={{color:'white'}}><b>Good Infrastructure</b></h6>
                  <p style={{fontSize:'0.7em',color:'white'}}>
                    Lorem ipsum dolor sit amet<br/>
                    consectetur.vivamus arcu sit viverra<br/>
                    iaculis non lectus. ultrices pretium eget<br/>
                    posuere eget 
                  </p>
                </Card.Body>
              </Card>
              <Card style={{width:'120%',marginTop:'20%',marginBottom:'-45%',textAlign:"start"}} className='shadow'>
                <Card.Body className='m-2 mb-3 mt-3'>
                  <BsFillBriefcaseFill className='rounded-circle p-3' style={{color:'rgb(5, 95, 5)',background:'rgb(110, 217, 203)',fontSize:'4.8em'}}/>
                  <h6 className='mt-3'><b>Bussiness</b></h6>
                  <p style={{fontSize:'0.7em'}}>
                    Lorem ipsum dolor sit amet<br/>
                    consectetur.vivamus arcu sit viverra<br/>
                    iaculis non lectus. ultrices pretium eget<br/>
                    posuere eget 
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5} sm={5} md={3} style={{marginLeft:'7%'}}>
              <Card style={{width:'120%',marginTop:'-30%',textAlign:"start"}} className='shadow'>
                <Card.Body className='m-2 mb-3 mt-3'>
                  <BsLaptop className='rounded-circle p-3' style={{color:'green',background:'yellow',fontSize:'4.8em'}}/>
                  <h6 className='mt-3'><b>Best Support Team</b></h6>
                  <p style={{fontSize:'0.7em'}}>
                    Lorem ipsum dolor sit amet<br/>
                    consectetur.vivamus arcu sit viverra<br/>
                    iaculis non lectus. ultrices pretium eget<br/>
                    posuere eget 
                  </p>
                </Card.Body>
              </Card>
              <Card style={{width:'120%',marginTop:'20%',marginBottom:'-46%',textAlign:"start"}} className='shadow'>
                <Card.Body className='m-2 mb-3 mt-3'>
                  <AiOutlineMessage className='rounded-circle p-3' style={{color:'white',background:'rgb(97, 182, 222)',fontSize:'4.8em'}}/>
                  <h6 className='mt-3'><b>Senchola Managed</b></h6>
                  <p style={{fontSize:'0.7em'}}>
                    Lorem ipsum dolor sit amet<br/>
                    consectetur.vivamus arcu sit viverra<br/>
                    iaculis non lectus. ultrices pretium eget<br/>
                    posuere eget 
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>











        {/* <div className='container-fluid bg'>
            <Container>
               <Row>
               <Col className='' xs={5} sm={5} md={4}>
                    <h3 className='ex'>
                        Expert Talent with Curated Resources & Support
                    </h3>
                    <p>
                        we have the best facilities to ensure that
                        students have the best experience while learning. We believe that practicals helps in fast learning
                    </p>
                    <button className='btttn4'>SEE MORE</button>
                </Col>
                <Col className='' xs={5} sm={5} md={3}>
                <div className="card sen-card-one" style={{width: "18rem"}}>
                    <div className="card-body">
                        <TbBooks className='sen-tb-book'></TbBooks>
                        <h5 className="card-title">Good Infrastructure</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet
                            consectetur. Vivamus arcu sit viverra iaculis non lectus. Ultrices pretium eget posuere eget</p>
                        
                    </div>
                    </div>
                    <div className="card sen-card-two" style={{width: "18rem"}}>
                    <div className="card-body">
                        <BsFillBriefcaseFill className='sen-bus-ico'></BsFillBriefcaseFill>
                        <h5 className="card-title">Bussiness</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet
                            consectetur. Vivamus arcu sit viverra
                            iaculis non lectus. Ultrices pretium eget
                            posuere eget</p>        
                    </div>
                    </div>
                </Col>
                <Col className="" xs={5} sm={5} md={3}>
                <div className="card sen-card-three" style={{width: "18rem"}}>
                    <div className="card-body">
                    <BsLaptop className='sen-lap-ico'></BsLaptop>
                        <h5 className="card-title">Best Support Team</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet
                            consectetur. Vivamus arcu sit viverra
                            iaculis non lectus. Ultrices pretium eget
                            posuere eget</p>        
                    </div>
                    </div>
                    <div className="card sen-card-four" style={{width: "18rem"}}>
                    <div className="card-body">
                    <AiOutlineMessage className='sen-text-ico' />
                        <h5 className="card-title">Senchola Managed</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet
                            consectetur. Vivamus arcu sit viverra
                            iaculis non lectus. Ultrices pretium eget
                            posuere eget</p>        
                    </div>
                    </div>
                    
                </Col>
               </Row>
            </Container>
        </div> */}

        <br /><br /><br /><br /><br /><br />
        <Container>
            <Row>

                <Col>
                <div>
                <div className='home-img'>
                    <img src={modelgirl} alt="modelgirl"  className='modelgirl'/>
                </div>
                    <div className="glassmorphism ">
        <div className="glassmorphism1 d-flex">
          <div className="glassmorphism__icon glassmorphism__icon1 home-three home-1">
            <RiPagesFill style={{}} className='home-icon-sankar'/>
          </div>
          <div className="glassmorphism__right ms-3">
          <div className="glassmorphism__courses text-muted">
          <small>5 Courses</small>
          </div>
          <div className="glassmorphism__designation">
          <b>UI/UX Design</b>
          </div>
          </div>
          </div>
          <div className="glassmorphism2 d-flex">
          <div className="glassmorphism__icon glassmorphism__icon2 home-three home-2">
            <MdOutlineDeveloperMode style={{}} className='home-icon-sankar'/>
          </div>
          <div className="glassmorphism__right ms-3">
          <div className="glassmorphism__courses text-muted">
           <small>10 Courses</small>
          </div>
          <div className="glassmorphism__designation">
          <b>Development</b>
          </div>
          </div>
          </div>
          <div className="glassmorphism3 d-flex">
          <div className="glassmorphism__icon glassmorphism__icon3 home-three home-3">
            <HiSpeakerphone style={{}} className='home-icon-sankar'/>
          </div>
          <div className="glassmorphism__right ms-3">
          <div className="glassmorphism__courses text-muted">
          <small>4 Courses</small>
          </div>
          <div className="glassmorphism__designation">
          <b>Marketing</b>
          </div>
          </div>
          </div>

        </div>
        </div>
                </Col>
                <Col className='Course-video mt-5 ms-5'>
                    <div className='wt'>
                    <h2 className='fg'>Learn without limits and spread knowledge.</h2>
                    <p>Build new skills for that "this is my year" feeling with courses, certificates, and degrees from world-class company like Senchola.</p>
                    </div>
                    <div>
                        <button className='see-course'>See Courses</button> 
                        <button className='sen-btn'><FontAwesomeIcon icon={faPlay} style={{color: "#27880c" }} className='fapl' /></button> <span className='Watch-Video'>Watch Video</span>
                    </div><br />
                    <p className='engagement'>Recent engagement</p>
                    <div className='details'>
                        <p className='Students'><span className='two-hunder'>200+</span>Students</p>
                        <p className='Students pass'><span className='two-hunder'>6+</span>Courses</p>
                    </div>
                </Col>
            </Row>
        </Container> 
       
        <br /><br /><br /><br /><br />
        <Container>
            <Row>
                <h2 className='GALLERY home-s'>OUR GALLERY</h2><br /><br /><br />
                <Col className=' col-xs-10 col-sm-10 col-md-6 col-lg-4 sen-img-gal-one'>
                    <img src={Rectangle} alt="Rectangle" className='Rectangle'/>
                </Col>
                <Col className=' col-xs-10 col-sm-10 col-md-6 col-lg-4 sen-img-gal' >
                    <img className='groupofpeople' src={groupofpeople} alt="groupofpeople" />
                    <img className='singleman' src={singleman} alt="singleman" />
                </Col>
                <Col className=' col-xs-10 col-sm-10 col-md-6 col-lg-4 sen-img-gal'>
                    <img  className='singlegirl' src={singlegirl} alt="singlegirl" />
                </Col>
            </Row>
        </Container>
        <br /><br /><br /><br /><br />
        <Container>
            <div className='sen-test-head'>
                <h2 className='TESTIMONIALS-HEAD home-s'>TESTIMONIALS</h2>
                <p className='test-para home-s'>what people say about us</p>
            </div>
            <div className='TESTIMONIALS'>
                <div className='pa-sen-he'>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                    <br />
                    <p className='pa-sen-one'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia doloribus consequatur ullam enim, illum aut iste obcaecati blanditiis soluta!
                    <br /><br />
                    <div className='sen-name-grop'>
                    <img src={faceone} alt="faceone" className='imgone' />
                    <span className='sen-name-one'>Alman Kesen <br /> <span className='sen-name-two'>UI UX Designer</span></span>
                    </div>
                    </p>
                </div>
                <div >
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia doloribus consequatur ullam enim, illum aut iste obcaecati blanditiis soluta!
                    <br /><br />
                    <div className='sen-name-grop'>
                    <img src={facetwo} alt="faceone" className='imgone' />
                    <span className='sen-name-one'>Janney Jacksen <br /> <span className='sen-name-two'>Web Developer</span></span>
                    </div>
                </p>
                </div >
                <div >
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia doloribus consequatur ullam enim, illum aut iste obcaecati blanditiis soluta!
                    <br /><br />
                    <div className='sen-name-grop'>
                    <img src={faceone} alt="faceone" className='imgone' />
                    <span className='sen-name-one'>Eleveny Petun <br /> <span className='sen-name-two'>App Developer</span></span>
                    </div>
                </p>
                </div>
                <div  className='test-sen-one'>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} /><FontAwesomeIcon icon={faStar} style={{color: "#FFD700",}} />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia doloribus consequatur ullam enim, illum aut iste obcaecati blanditiis soluta!
                    <br /><br />
                    <div className='sen-name-grop'>
                    <img src={facetwo} alt="faceone" className='imgone' />
                    <span className='sen-name-one'>Klessen Amy <br /> <span className='sen-name-two'>Flutter Developer</span></span>
                    </div>
                </p>
                </div>
            </div>
        </Container>
        <br /><br /><br /><br /><br />
        <div>
        </div>
    </div>
  )
}

export default Home