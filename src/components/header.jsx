import { useNavigate } from "react-router-dom";
import '../css/header.css';
const Header = ()=>{
    const navigate = useNavigate();
    return(
        <div id="header">
           <nav class="navbar">
      <div class="logo">Amazing coding</div>
      <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu">
              <li><a onClick={()=>{navigate('/')}}>Home</a></li>
              <li><a onClick={()=>{navigate('/Registration')}}>Registration</a></li>
              <li><a onClick={()=>{navigate('/userlist')}}>userlist</a></li>
              <li><a onClick={()=>{navigate('/login')}}>login</a></li>


              <li class="services">
                  <a >Services</a>
                  <ul class="dropdown">
                      <li><a >React </a></li>
                      <li><a>NodeJs</a></li>
                  </ul>
              </li>
          </div>
      </ul>
  </nav>
          
        </div>
    )
}
export default Header;
