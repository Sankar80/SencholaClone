import React from 'react'
import SignupImage from '../Images/Signup_Image_1.png'
import { Figure,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { TbEyeOff } from 'react-icons/tb'
import login_img from './img/img1.png'
import './Login.css'

const Login = () => {
  return (
    <section>
        <div className='container my-5'>
            <Row>
                <Col md={1}>
                
                </Col>
                <Col md={4} sm={12} className=''>
                <h1> <b>LOGIN FORM</b></h1>
                <h5 style={{fontWeight:'500'}}>
                    <b>Welcome back !</b> <br />
                    <small className='text-muted' style={{fontSize:'12px'}}>Enter your Credentials Details to create a new account</small>
                </h5>
                <Form>
                       {/*  <Form.Group className="mb-3 signup-heading" controlId="formBasicEmail">
                        <Form.Label className='signup-required'>Email address</Form.Label>
                        <Form.Control type="email" className="signup-input" placeholder="Enter your email" />  */}
                        <label htmlFor="name" className='signup-required mt-3' >Email address</label>
                        <input type="text" className='signup-input text-muted' placeholder='Enter your email'/>
                        {/* </Form.Group> */}

                        {/* <Form.Group className="mb-3 signup-heading" controlId="formBasicPassword">
                        <Form.Label className='signup-required'>Password</Form.Label>
                        <Form.Control type="password" className="signup-input signup-input-password" placeholder="Enter your password" />  */}
                        <label htmlFor="name" className='signup-required' >Password</label>
                        <input type="text" className='signup-input ligin-password text-muted' placeholder='Enter your password '/>
                        <TbEyeOff className='ligin'/>  
                        <a href="" className='signup-a signup-forget'>Forget Password!!</a> <br />
                       {/* </Form.Group> */}
                        {/*  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I accept the Terms of use & Privacy Policy" />  */}
                        <input type="checkbox" id="policy" name="" value="" />
                         <label for="policy" className='signup-policy'><b>Remember me</b></label>
                        {/* </Form.Group> */}
                        <Button variant="success" type="submit" className='w-100 signup-button'>
                         <b>Login</b>
                        </Button>
                 </Form>
                 <div >
                    <div className="signup-horizontal-line-container">
                        <hr className="signup-horizontal-line" />
                        <div className="signup-line-text">OR</div>
                        <hr className="signup-horizontal-line" />
                    </div>
                    <div className='signup-icons'>
                     <p className='signup-para'> <FcGoogle style={{font:'inherit'}}/>&nbsp;&nbsp;sign in with Google</p>
                     <p className='signup-para'> <BsApple style={{font:'inherit'}}/>&nbsp;&nbsp;sign in with Apple</p>
                    </div>
                    <p className='text-center signup-account'>Don't have an account?  <a href="#" className='signup-a'>sign up</a></p>
                 </div>
                </Col>
                <Col md={1}>
                
                </Col>
                <Col md={6} sm={12} className=''>
                   <Figure.Image 
                   src={login_img}
                   alt=''
                   className='signup-img'
                   />
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Login