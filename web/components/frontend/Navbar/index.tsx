'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className="pt-0 px-0 lg:px-20 lg:pt-4 select-none">
                <div className="navbar bg-base-200 lg:rounded-box lg:shadow-lg lg:divide-y border-b lg:border-b-0 border-base-300">
                    <div className="navbar-start">
                        <div className="flex items-center lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden focus:bg-base-100 focus:border focus:border-primary focus:text-primary"
                                onClick={handleDrawerToggle}>
                                <FontAwesomeIcon icon={faBars} width="20" height="20" />
                            </div>
                        </div>
                        <a className="flex items-center p-2 mr-4 text-lg font-bold text-primary space-x-2 group" href="/">
                            <img src="/assets/img/svg/logo.svg" height="35" width="35" alt="logo" className='group-hover:drop-shadow-lg transition-all' />
                            <span className="hidden lg:block group-hover:drop-shadow-lg transition-all"
                            >secondlanguage.io</span>
                            <span className="block lg:hidden group-hover:drop-shadow-lg transition-all"
                            >SL</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/learn/english/lesson/grammar">English</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end mr-2">
                            <div tabIndex={0} role="button" className="">
                                <img src="https://picsum.photos/200" height="35" width="35" alt="avatar" className='rounded-full shadow-lg border-2 border-primary' />
                            </div>
                            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    

                    </div>
                </div>
            </div>
            <>
                <div className={"fixed inset-0 bg-opacity-10  w-full h-full duration-300 transform" + (isOpen ? " translate-x-0" : " -translate-x-full")}
                    onClick={handleDrawerToggle} style={{ zIndex: 40 }}></div>
                <div className={"absolute top-0 left-0 bg-base-200 w-64 h-full border-r border-base-300 duration-300 transform  shadow-lg" + (isOpen ? " translate-x-0" : " -translate-x-64")}
                    style={{ zIndex: 50 }}>
                    <div className="flex flex-col w-full p-4">
                        <div className="flex items-center w-full h-16">
                            <div className="text-lg font-bold text-base-300">secondlanguage.io</div>
                            <div className="ml-auto">
                                <div tabIndex={0} role="button" className="btn btn-ghost focus:bg-base-100 focus:border focus:border-primary focus:text-primary"
                                    onClick={handleDrawerToggle}>
                                    <FontAwesomeIcon icon={faBars} width="20" height="20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Item 2
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Item 1
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Item 3
                            </a>
                        </li>
                    </ul>
                </div>
            </>

        </>
    );
}


export default Navbar;