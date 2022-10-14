import {Link} from 'react-router-dom';
import App from './App.css';
const Nav = ({selectedColor}) =>{


    return(
        <nav className='navbar navbar-expand py-0' style={{backgroundColor:`${selectedColor}`}}>
            <ul style={{color:"white"}} className='navbar-nav mc-auto mb-2 mb-lg'>
                <li>
                    <Link className='nav-link' to ='/'>Home</Link>
                </li>
                <li>
                    <Link className='nav-link' to ='/AddNewbox'>Create Box </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav