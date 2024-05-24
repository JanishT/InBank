import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="all_nav_">
      <Link className="logo_head_nav"to="/navbar/mainpart"><h2>InBank</h2></Link>
      <div className="all_lnks_">
        <Link className="lnk_nav" to="/navbar/mainpart">HOME</Link>
        <Link className="lnk_nav" to="/navbar/Aboutus">ABOUT US</Link>
        <Link className="lnk_nav">TRANSACTION HISTORY</Link>
        <Link className="lnk_nav">GET MOBILE APP</Link>
      
      </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
