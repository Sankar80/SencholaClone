import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import {FaTelegramPlane} from 'react-icons/fa';
import {BsLinkedin,BsYoutube,BsInstagram,BsTwitter} from 'react-icons/bs';
import {AiFillFacebook,AiOutlineCopyrightCircle} from 'react-icons/ai';
/* import './Footer.css' */

const Footer = () => {
  return (
    <div style={{background:'rgb(11, 107, 57)',color:'white',fontFamily: 'Inclusive Sans',paddingTop:'2%'}}>
    <Container>
         <Row className='footer-row'>
             <Col md={3} xs={6} className='footer-bottom'>
                 <h5 style={{fontWeight:'900'}}>Senchola</h5>
                 <p className='mt-3 text-justify' style={{fontSize:'60%',textAlign:'justify'}}>
                     We help ambitious companies scale through our exclusive global network of freelance talent, outsourcing services, and market insights. Join Senchola to accelerate and scale your business growth.
                 </p>
             </Col>
             <Col md={2} xs={6} className='footer-bottom'>
             <span style={{fontSize:'90%'}}><b>Use Cases</b></span>
                 <div className='mt-2' style={{fontSize:'60%'}}>UI Design</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>UX Design</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>UX Design</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>UI Design</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Ux Design</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Prototyping</div>
                 <p></p>
             </Col>
             <Col md={2} xs={6}>
             <span style={{fontSize:'90%'}}><b>Explore</b></span>
                 <div className='mt-2' style={{fontSize:'60%'}}>Figma</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Customers</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Why I Love Figma</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Figma</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Customers</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Why I Love Figma</div>
             </Col>
             <Col md={2} xs={6} >
                 <span style={{fontSize:'90%'}}><b>Resources</b></span>
                 <div className='mt-2' style={{fontSize:'60%'}}>Resources Hub</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Support</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Education</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Resources Hub</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Support</div>
                 <div className='mt-2' style={{fontSize:'60%'}}>Education</div>
                 <p></p>
             </Col>
             <Col md={3} xs={8}>
             <span style={{fontSize:'70%'}}>Connect with Senchola Technologies</span><br/>
             <Form.Control className='mt-2 p-2' type="email" placeholder='Email' style={{fontSize:'0.65em',fontWeight:'600',width:'20.6em'}}/>
             <FaTelegramPlane style={{marginTop:'-2.5em',marginLeft:'7.4em',fontSize:'1.5em',color:'green'}}/>
             <div >
                 <BsLinkedin style={{fontSize:'1.2em'}} className='me-3'/>
                 <BsYoutube style={{fontSize:'1.4em'}} className='me-3'/>
                 <AiFillFacebook style={{fontSize:'1.4em'}} className='me-3'/>
                 <BsInstagram style={{fontSize:'1.2em'}} className='me-3'/>
                 <BsTwitter style={{fontSize:'1.2em'}} className='me-3'/>
             </div>
             </Col>
         </Row>
         <hr className='border-2' style={{color:'white'}}/>
         <div className='text-center pt-0 pb-2' style={{fontFamily:'arial',fontSize:'0.8em'}}>All Copyrights Reserved <AiOutlineCopyrightCircle/> 2023 Senchola Technologies Solution</div>
    </Container>
 </div>
  )
}

export default Footer
