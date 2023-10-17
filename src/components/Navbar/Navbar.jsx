import { useState } from 'react';
import Link from '../Link/Link';
import './Navbar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navBars = [
        {
            "id": 1,
            "name": "Home",
            "route": "/"
        },
        {
            "id": 2,
            "name": "About Us",
            "route": "/about"
        },
        {
            "id": 3,
            "name": "Services",
            "route": "/services"
        },
        {
            "id": 4,
            "name": "Portfolio",
            "route": "/portfolio"
        },
        {
            "id": 5,
            "name": "Contact",
            "route": "/contact"
        }
    ]

    return (
        <nav className='bg-cyan-400' >
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ?  <XMarkIcon className="h-6 w-6 text-cyan-600" />: <Bars3Icon className="h-6 w-6 text-cyan-600" /> }
                </span>
            </div>
            <ul className={`md:flex absolute duration-500 md:static ${open? 'top-6': '-top-36'}`}>
                {navBars.map(navBar => <Link key={navBar.id} navBar={navBar} ></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;