import logo from '../../../../public/logo.png'
import moment from 'moment'
import { Button} from 'react-bootstrap';
import Marquee from 'react-fast-marquee'

const Header = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className=' d-flex'>
                <Button variant='danger'>Latest</Button>
                <Marquee>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;