import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-red-900 text-4xl font-bold cursive tracking-widest"
          >
            D G Shivu
          </NavLink>
          <NavLink
            to="/blogs"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-red-900"
            activeClassName="text-red-900"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-red-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/certificates"
            activeClassName="text-red-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-red-900"
          >
            Certificates
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white font-bold hover:text-red-900"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/shivu_dg"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/s_h_y_v_z/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.reddit.com/user/dgshivu/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/dgshivu/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.github.com/Shivz3232"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
