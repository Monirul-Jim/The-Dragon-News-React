import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../src/assets/qZone1.png'
import logo1 from '../../../src/assets/qZone2.png'
import logo2 from '../../../src/assets/qZone3.png'
import bg from '../../../src/assets/bg.png'

const RightSideNav = () => {
    return (
        <div className='text-center'>
            
            <h1>Login With</h1>
                        <div className='gap-2'>
                        <Button variant="outline-primary"><FaGoogle/> Login with Google</Button><br />
                            <Button variant="outline-primary"><FaGithub/> Login with Github</Button>
                        </div>
                        <div className='mt-2'>
                            <h4>Find Us On</h4>
                            <ListGroup>
                                <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                                <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                                <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <img src={bg} alt="" />
                            </div>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <h1 className='text-white'>Create an <br /> Amazing <br /> Newspaper</h1>
                                <p className='text-white'>Discover thousands of <br /> options, easy to <br /> customize 
                                    layouts, one- <br /> click to import demo <br /> and much more.</p>
                                    <Button variant="danger">Learn More</Button>
                            </div>
                        </div>
        </div>
    );
};

export default RightSideNav;