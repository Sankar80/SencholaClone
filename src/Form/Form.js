import React from 'react'
// import { Container } from 'react-bootstrap'
import { Container,Row,Col } from 'react-bootstrap';
import '../Form/Form.css'

const Form = () => {
  return (
    <Container className='my-5 sen-form-all'>
        <h3 className='sen-SENCHOLA-head-UNIVERSITY text-center'>SENCHOLA UNIVERSITY</h3>
        <p className='sen-USER-FORM text-center'>USER FORM</p>
        <div className='sen-names'>
          <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname'>First Name<span  className='sen-rd'>*</span></label><br />
            <input type="text" id='firstname' placeholder='Enter your name'/>
          </div>
          <div className='lastname'>
            <label htmlFor="lastname" className='sen-last-name'>Last Name</label><br />
            <input type="text" id='lastname' placeholder='Enter Your Name' />
          </div>
        </div>


        <div className='sen-names'>
          <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname  sen-education-qualification'>Education Qualification<span className='sen-rd'>*</span></label><br />
            <select className='' id='firstname'>
              <option value="sele">--Select your Degree--</option>
              <option value="be">BE</option>
              <option value="bsc">BSc</option>
            </select>
          </div>

          <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname'>Father Name<span className='sen-rd'>*</span></label><br />
            <input type="text" id='firstname' placeholder='Enter Father name'/>
          </div>
        </div>

        <div className='sen-names'>
          <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname sen-ohone'>Phone Number<span  className='sen-rd'>*</span></label><br />
            <input type="number" id='firstname' placeholder='Enter your Number'className='sen-mob-num' />
          </div>
          <div className='lastname'>
            <label htmlFor="lastname" className='sen-last-name sen-eml'>Email address<span  className='sen-rd'>*</span></label><br />
            <input type="email" id='lastname' placeholder='Enter Your email' />
          </div>
        </div>

        <div className='sen-names'>
        <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname sen-dofb'>Date of Birth(DOB) <span className='sen-rd'>*</span></label> <br />
            <label className='sen-dob'>      
              <input id='firstname' className='sen-dob-lab' />
              <button className='sen-dob-bttn sen-DOFBB'>Select DOB</button>
            </label>
            
          </div>

          <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname  sen-education-qualification sen-bat'>Your Batch no <span className='sen-rd'>*</span></label><br />
            <select className='' id='firstname'>
              <option value="sele">--Select your Batch--</option>
              <option value="be">1 st Batch</option>
              <option value="bsc">1 nd Batch</option>
              <option value="bsc">3 nd Batch</option>
            </select>
          </div>
        </div>


        <div className='sen-names'>
        <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname  sen-education-qualification sen-bat sen-Domain'>Your Domain <span className='sen-rd'>*</span></label><br />
            <select className='' id='firstname'>
              <option value="sele">--Select your Domain--</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
          </div>

        <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname sen-dofb sen-KYC'>Upload KYC Documents <span className='sen-rd'>*</span></label> <br />
            <label className='sen-dob'>  
              <input id='firstname' placeholder='Choose PDF File'  className='sen-dob-lab' />
              <button className='Sen-Upload-File'>Upload File</button>
            </label>
          </div>
        </div>

        
        <div className='sen-names'>
        <div className='sen-full-first-name-clz'>
            <label htmlFor="firstname" className='sen-firstname sen-dofb sen-KYC sen-Resume'>Upload Resume <span className='sen-rd'>*</span></label> <br />
            <label className='sen-dob'>  
              <input id='firstname' placeholder='Choose File'  className='sen-dob-lab' />
              <button className='Sen-Upload-File '>Upload File</button>
            </label>
          </div>
          <div className='sen-lorm'>
            Lorem ipsum dolor sit amet.hohlnln kjnkb sdlfn
          </div>
        </div>

        <div className='sen-names'>
          <button className='sen-REGISTER w-80'>REGISTER</button>
        </div>
          <br /><br /><br /><br /><br />

    </Container>
  )
}

export default Form