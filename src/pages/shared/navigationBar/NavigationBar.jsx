import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../provders/AuthProvider';

const NavigationBar = () => {
    const {user}=useContext(AuthContext)
    return (
        <>
           <Container>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className='text-decoration-none me-2  text-secondary'  >Home</Link>
                            <Link to='/' className='text-decoration-none me-2 text-secondary' >About</Link>
                            <Link to='/' className='text-decoration-none  text-secondary' >Career</Link>
                        </Nav>
                        <div className="gap-4 d-flex justify-center align-center">
                            <p><FaUserCircle size={30} /></p>
                           {
                            user ? <Button size='sm' style={{ height: '30px', width: '64px', fontSize: '12px' }} variant="dark ">LogOut</Button>:
                           <Link to='/login'> <Button size='sm' style={{ height: '30px', width: '64px', fontSize: '12px' }} variant="dark ">Login</Button></Link>
                           }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           </Container>
        </>
    );
};

export default NavigationBar;