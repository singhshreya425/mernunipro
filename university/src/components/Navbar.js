import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <div className="flex justify-content-space-between bg-navbar plr-10 ptb-20">
            <div>
               UNIVERSITY 
            </div>
            <div className='flex'> 
                <div className='pl-5 nav-links'><Link className='link' to="/home">Home</Link></div>
                <div className='pl-5 nav-links'><Link className='link' to="/about">About</Link></div>
                <div className='pl-5 nav-links'><Link className='link' to="/courses">Courses</Link></div>
                <div className='pl-5 nav-links'><Link className='link' to="/services">Services</Link></div>
                <div className='pl-5 nav-links'><Link className='link' to="/contactus">Contactus</Link></div>
            </div>
            
        </div>
    )
}
export default Navbar