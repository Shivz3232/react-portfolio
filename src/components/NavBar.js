import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function NavBar() {
    return (
        <div className="antialiased bg-black">
            <header className="lg:px-16 px-6 bg-bloack flex flex-wrap items-center lg:py-0 py-2">
                <div classNama="flex-1 flex justify-between items-center">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 text-white hover:text-red-900 text-4xl font-bold cursive tracking-widest">
                        D G Shivu
                    </NavLink>
                </div>

                <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
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
                                >
                                    Blogs
                                </NavLink>
                            </li>
                                <li>
                                <NavLink
                                    to="/project"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/certificates"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                >
                                    Certificates
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/resume"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
                                >
                                    Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeClassName="text-red-900"
                                    className="my-6 inline-flex items-center py-3 px-3 rounded text-white font-bold hover:text-red-900"
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
