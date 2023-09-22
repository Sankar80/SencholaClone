import React from 'react'
import '../Components/WhySenchola.css'
import { Row,Col,Container, Figure, Table, Card } from 'react-bootstrap'
import { CDBBtn, CDBContainer } from "cdbreact";
import { RxTriangleRight } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'
import { MdDoneAll } from 'react-icons/md'
import { AiOutlineFile,AiFillFile,AiOutlinePlayCircle } from 'react-icons/ai'
import { FaUsers,FaFile } from 'react-icons/fa'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { MdMessage } from 'react-icons/md'
import { TbShare } from 'react-icons/tb'
import { RiComputerLine } from 'react-icons/ri'
import { LiaHandsHelpingSolid } from 'react-icons/lia'
import img1 from '../Images/Image_1.png'
import img2 from '../Images/Image_2.png'
import img3 from '../Images/Image_3.png'
import Group_img1 from '../Images/Group1.png'
import Group_img2 from '../Images/Group2.png'
import Group_img3 from '../Images/Group3.png'
import Group_img4 from '../Images/Group4.png'
import Group_img5 from '../Images/Group5.png'
import Group_img6 from '../Images/Group6.png'


const WhySenchola = () => {
  return (
    <section >
        <div style={{backgroundColor:' #fce883 '}} className='pt-3 pb-5' > 
            <Container >
                <Row>
                    <Col md={6} className='my-auto mx-auto'>
                        <p className='' style={{fontSize:'2.5rem',fontWeight:'bolder',color:'darkgreen'}}>
                            Best Learning <br /> Education Platform <br /> is Senchola.
                        </p>
                        <p className='' style={{fontSize:'1.2rem',textAlign:'justify'}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium, dicerem impudens, nisi hoc institut translatum ad philosophos nostros esset.
                        </p>
                        <div className='d-flex'>
                            <CDBBtn color="success" className='px-4' circle style={{backgroundColor:'green'}}>
                               Learn More
                            </CDBBtn>
                            <CDBBtn color="dark" className='ms-3 px-3' circle outline>
                              {/* <RxTriangleRight className='whysenchola-circle me-2'/> */}
                              <BsFillPlayCircleFill style={{marginLeft:'-5px'}}/> 
                              &nbsp;Watch Video
                            </CDBBtn>
                        </div>
                        <p></p>
                        
                    </Col>
                    <Col md={6}  className='text-center'>
                        <Figure.Image
                            src={img1}
                            alt=''
                            className='mx-5  whysenchola-first-img1'
                        />
                        <Figure.Image
                            src={img2}
                            alt=''
                            className='whysenchola-first-img2'
                        />  
                        
                           <div className='whysenchola-overlay1 text-center'> 
                             <TiTick style={{marginLeft:'-5px'}}/>Build remote teams <br /> &nbsp;&nbsp;&nbsp;&nbsp; faster with senchola <br />
                             <TiTick  style={{marginLeft:'-40px'}} />Expert Trainee
                          </div>     
                    </Col>
               </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row className='whysenchola-second-row mt-5'>
                    <Col md={6} className=''>
                      <p className='' style={{fontSize:'2rem',fontWeight:'bolder'}}>Why Senchola <br /> University ?</p>
                      <p>
                         < MdDoneAll color='blue'/> What we teach is much more relevant for real software careers.
                      </p>
                      <p>
                         < MdDoneAll color='blue'/> At Senchola, we look for skillsets and abilities more than for paper &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;credentials.
                      </p>
                      <p>
                         < MdDoneAll color='blue'/> We do not charge our students any fees.
                      </p>
                      <p>
                         < MdDoneAll color='blue'/> After the successful completion of the Intership, you are automatically &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inducted as an employee into Senchola Technologies Solution.
                      </p>
                    </Col>
                    <Col md={6} className='mt-5 mx-auto'>
                      <div className='whysenchola-verticalline'>
                            
                      </div>
                      <div  className='whysenchola-second-lorem'>
                            <p className='mt-5' >
                                Lorem ipsum dolor sit amet consectetur. Urna vitae ermentum nunc sit proin elementum nibh elementum.
                            </p>
                            <p className=''>
                                Lorem vivamus amet. Eu faucibus mattis sit vestibulum velit ut. Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla igula a. Orci proin arcu egestas et commodo placerat.
                            </p>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='whysenchola-bgimage'>
           <Container >
            <div className='whysenchola-third-card'>
              <Row>
                <Col className='me-0 px-4 pb-5'>
                  <Card className='p-4 whysenchola-third-commoncard whysenchola-third-card1' style={{borderRadius:'20px'}}>
                      <FaFile style={{color:'red' }} className='whysenchola-icon-1 mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Breadth and Depth for Immediate Scale</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
                <Col  className='ms-0 me-0 px-4 pb-5'>
                   <Card className='p-4 whysenchola-third-commoncard whysenchola-third-card2' style={{borderRadius:'20px'}}>
                      <TbShare style={{color:'blue'}} className='whysenchola-icon-2 mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Scaleable Managed Outsourcing</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
                <Col  className='me-0 ms-0 px-4'>
                   <Card className='p-4 whysenchola-third-commoncard whysenchola-third-card3' style={{borderRadius:'20px'}}>
                      <MdMessage style={{color:'brown'}} className='whysenchola-icon-3 mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Elastic Freelancer <br />Model</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col className='me-0 px-4 pb-5'>
                  <Card className='p-4 whysenchola-third-commoncard whysenchola-third-card4' style={{borderRadius:'20px'}}>
                      <LiaHandsHelpingSolid style={{color:'green'}} className='whysenchola-icon-4 mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Global Pricing <br />Model</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
                <Col className='ms-0 me-0 px-4 mb-5'>
                   <Card className='p-4  whysenchola-third-commoncard whysenchola-third-card5' style={{borderRadius:'20px'}}>
                      <FaUsers style={{color:'purple'}} className='whysenchola-icon-5  mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Jumpstart Your <br /> Business</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
                <Col className='me-0 ms-0 px-4'>
                   <Card className='p-4 whysenchola-third-commoncard whysenchola-third-card6 ' style={{borderRadius:'20px'}}>
                      <RiComputerLine style={{color:'yellow'}} className='whysenchola-icon-6 mx-auto' />
                      <h5 style={{fontWeight:'bolder'}}>Exclusive Professional Marketplace</h5>
                      <p className='whysenchola-cover-text pb-0'>
                         Lorem vivamus amet.Eu faucibus mattis sit vestibulum velit ut.Varius magna ultricies varius vitae adipiscing imperdiet ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed fringilla ligula a. Orci proin arcu egestas et commodo placerat.
                      </p>
                   </Card>
                </Col>
              </Row>
              </div>
           </Container>
        </div>
        <div className='container whysenchola-four'>
            <Row className=''>
                <Col md={6}>
                  <Figure.Image
                     alt=""
                     src={img3}
                     style={{maxHeight:"390px"}}
                     className='my-5 whysenchola-four-img1'
                    />
                </Col>
                <Col md={6} className='whysenchola-text my-5'>
                    <h6 className='mt-2 whysenchola-four-heading'>
                       Lorem integer dapibus rhoncus fusce nisi augue fringilla.
                    </h6>
                    <p>
                       Lorem ipsum dolor sit amet consectetur.Cras lacinia ante tincidunt donec praesent pellentesque bibendum.Consectetur ipsum et id nullam interdum.Lorem vel mauris in a lorem scelerisque mi tempor. Dignissim sed sem ac sagittis elit dolor nisi egestas. Egestas sagittis sagittis odio nisi urna malesuada. Lectus diam id molestie et egestas luctus. Nam venenatis integer purus proin nisl.
                    </p>
                    <div className='whysenchola-overlay2 text-center'> 
                        <TiTick style={{marginLeft:'-5px'}}/>Build remote teams <br /> &nbsp;&nbsp;&nbsp;&nbsp; faster with senchola <br />
                        <TiTick  style={{marginLeft:'-40px'}} />Expert Trainee
                     </div> 
                </Col>
            </Row>
        </div>
        <div className='container text-center'>
           <h4 style={{color:'green'}}><b>RECRUITING TOP TALENTS</b></h4>
           <small><b>Recruiting Top Talent</b></small>
           {/* <Table className='my-5'>
            <tbody>
               <tr>
                  <td rowSpan="1" colSpan="3">
                     <Figure.Image 
                        src={Group_img1}
                        className='img-fluid'
                     />
                  </td>
                  <td rowSpan="2" colSpan="1">
                     <Figure.Image 
                        src={Group_img5}
                        className='img-fluid'
                     />
                  </td> 
               </tr>
               <tr>
                  <td rowSpan="2" colSpan="1">
                     <Figure.Image 
                        src={Group_img3}
                        className='img-fluid'
                     />
                  </td>
                  <td rowSpan="1" colSpan="2">
                     <Figure.Image 
                        src={Group_img2}
                        className='img-fluid'
                     />
                  </td>
               </tr>
               {/* <tr>
                 <td rowSpan="1" colSpan="1">
                     <Figure.Image 
                        src={Group_img4}
                        className='img-fluid whysenchola-img'
                     />
                  </td> 
                 <td rowSpan="1" colSpan="2">
                     <Figure.Image 
                        src={Group_img6}
                        className='img-fluid whysenchola-img'
                     />
                  </td> 
               </tr>   
            </tbody>
           </Table>  */}
           {/* <Row className='mt-5'>
               <Col md={9}>
                  <Figure.Image 
                     src={Group_img1}
                     className='img-fluid'
                  />
              </Col>
              <Col md={3} >
               
                 <Figure.Image 
                     src={Group_img5}
                     className='img-fluid'
                  />
              </Col>
           </Row>
           <Row className='mt-5'>
               <Col md={3}>
                  <Figure.Image 
                     src={Group_img3}
                     className='img-fluid'
                  />
              </Col>
              <Col md={6}>
                 <Figure.Image 
                     src={Group_img2}
                     className='img-fluid'
                  />
              </Col>
           </Row>
           <Row className='mt-5'>
               <Col md={3}>
               
               </Col>
               <Col md={4}>
                  <Figure.Image 
                     src={Group_img4}
                     className='img-fluid'
                  />
              </Col>
              <Col md={5}>
                 <Figure.Image 
                     src={Group_img6}
                     className='img-fluid'
                  />
              </Col>
           </Row> */}
           <div className='whysenchola-image-container my-5'>
               <Figure.Image className="whysenchola-image-one  whysenchola-imagegallery" src={Group_img1} alt="" />
               <Figure.Image className="whysenchola-image-two  whysenchola-imagegallery" src={Group_img5} alt="" />
               <Figure.Image className="whysenchola-image-three whysenchola-imagegallery" src={Group_img3} alt="" />
               <Figure.Image className="whysenchola-image-four  whysenchola-imagegallery" src={Group_img2} alt="" />
               <Figure.Image className="whysenchola-image-five  whysenchola-imagegallery" src={Group_img4} alt="" />
               <Figure.Image className="whysenchola-image-six  whysenchola-imagegallery" src={Group_img6} alt="" />
           </div>
        </div>
    </section>
  )
}

export default WhySenchola