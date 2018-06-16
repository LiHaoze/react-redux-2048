import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const style = {
    display: "inline-block",
    textDecoration: "none",
    color: "#ccc",
    height: "32px",
    lineHeight: "32px",
    fontSize: '1.2em'
  };
  const activeStyle = {
    color: "#1296db"
  };
  return (
   <div className="nav-container">
     <div className="nav" style={{borderRight: "1px solid #ccc"}}>
       <div>
         <NavLink exact style={style} activeStyle={activeStyle} to="/">
           游戏
         </NavLink>
       </div>
     </div>
     <div className="nav">
       <div>
         <NavLink style={style} activeStyle={activeStyle} to="/scorelist">
           排行榜
         </NavLink>
       </div>
     </div>
   </div>
  )
}

export default Navigation;