import {Link, useLocation} from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
    <div className='backgroundimg'>
        <img className="" src=""></img>
        <ul>
        <li className="nav">
            <Link to="/" >Home</Link>
        </li>
        <li className="nav">
            <Link to="/About" >About</Link>
        </li>
        <li className="nav">
            <Link to="/Projects" >Projects</Link>
        </li>
        <li className="nav">
            <Link to="/Contact" >Contact</Link>
        </li>
        <li className="nav">
            <Link to="/Resume" >Resume</Link>
        </li>
        </ul>
    </div>
    );
}

export default Nav;