import React, { useEffect, useState } from 'react';
import logow from "../assets/img/logo-white.png";
import logo from "../assets/img/logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const pageLoc = useLocation();
  const title = pageLoc.pathname;

  useEffect( ()=>{

    title === "/" ? setHomePage(true) : setHomePage(false);
  }, [title]

  );
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${ sticky || !homePage ? "dark-nav" : ""}`}>
      <img src={`${ sticky || !homePage ? logo : logow}`} className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">About Us</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="">Top Destinations</Link></li>
        <li><Link to="">News</Link></li>
      </ul>
      <button className="btn">Book Online</button>
      <User />
    </nav>
  )
}

export default Navbar

function User(){
  const navigate = useNavigate();
  const {user, isAuthenticated, logout} = useAuth();
  const handleLogout= () => {
    logout();
    navigate("/");
  };
  if(isAuthenticated) return <div className='user-login'><span>{user.name}</span><LogoutIcon onClick={handleLogout} /></div>
  return <Link to="/login">Login</Link>
}