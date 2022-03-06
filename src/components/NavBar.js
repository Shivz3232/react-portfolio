import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function NavBar() {
    const closeMenu = (e) => {
        const checkBox = document.getElementById("menu-toggle");
        checkBox.checked = false;
    }
    
    return (
        <div className="antialiased bg-black">
            <header className="lg:px-16 px-6 bg-bloack flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 text-white hover:text-red-900 text-4xl font-bold cursive tracking-widest">
                        D G Shivu
                    </NavLink>
                </div>

                <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                </label>
                <input type="checkbox" className="hidden" id="menu-toggle"/>
                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    activeClassName="text-red-900"
                                    onClick={closeMenu}
                                >
                                    Blogs
                                </NavLink>
                            </li>
                                <li>
                                <NavLink
                                    to="/project"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/certificates"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    onClick={closeMenu}
                                >
                                    Certificates
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/resume"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    onClick={closeMenu}
                                >
                                    Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/OnlyFans"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    onClick={closeMenu}
                                >
                                    OnlyFans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                    onClick={closeMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon
                            url="https://twitter.com/shivu_dg"
                            className="mr-2 ml-2"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.instagram.com/s_h_y_v_z/"
                            className="mr-2 ml-2"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.reddit.com/user/dgshivu/"
                            className="mr-2 ml-2"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.linkedin.com/in/dgshivu/"
                            className="mr-2 ml-2"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }}
                        />
                        <SocialIcon
                            url="https://www.github.com/Shivz3232"
                            className="mr-2 ml-2"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 35, width: 35 }}
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}


export default NavBar
