import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Headers.css'
import Logo from '../../assets/New Project.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = event =>{
    logOut()
    .then()
    .catch();
  }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start bg-green">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>Services</li>
      <li><a>About</a></li>
        <li><a>Blog</a></li>
      </ul>
    </div>
    <img width="200px" src={Logo} alt=''/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
      {
        user?.email ?
            <>
        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
        </>
        :
        <></>
        }
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <Link to='/login' className="btn btn-active btn-accent">Sign In</Link> */}
      {
        user?.uid ?
        <button onClick={handleLogOut} className="btn btn-active btn-error">Sign out</button>
        :
        <>
        <Link to='/login' className="btn btn-active btn-accent">Sign In</Link>
        </>
      }
  </div>
</div>
    );
}

export default Headers;