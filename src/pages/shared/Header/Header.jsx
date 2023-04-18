import logo from '../../../../public/logo.png'
import moment from 'moment'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee'
import { FaUserCircle} from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className=' d-flex'>
                <Button variant='danger'>Latest</Button>
                <Marquee>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg"  bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <div className="gap-4 d-flex justify-center align-center">
                           <p><FaUserCircle  size={30}/></p>
                           <Button size='sm'  style={{ height: '30px', width: '64px', fontSize: '12px' }} variant="dark ">Login</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;