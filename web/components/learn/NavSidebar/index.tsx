'use client';
import { faBars, faCaretRight, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const NavSidebar = ({ isOpen = false, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {

    function handleSelect(e: any) {
        console.log(e.target.dataset.value);
    }


    return (
        <div className={"relative bg-base-200 flex flex-col rounded-lg hidden lg:inline-block"}>
            <div className="absolute top-0 -left-8">
                <button onClick={() => setIsOpen(!isOpen)} className={"bg-base-300 p-2 rounded-l-lg transition-all duration-1000 " + (isOpen ? "rounded-r-lg shadow-r-lg" : "")}>
                    <FontAwesomeIcon icon={faEllipsisVertical} width="20" height="20" />
                </button>
            </div>
            <div className={"overflow-hidden transition-all duration-1000 " + (isOpen ? "w-64" : "w-0")}>
                <div className="flex items-center justify-between p-4 bg-base-300">
                    <h2 className="text-lg font-bold">Learn</h2>
                </div>
                <ul className="menu h-full" onClick={handleSelect}>
                    <li><a data-value="tr-en-grammar-index" href="#">Grammar</a></li>
                    <li>
                        <details open>
                            <summary>Vocabulary</summary>
                            <ul>
                                <li><a href="#">Basic Vocabulary</a></li>
                                <li><a href="#">Advanced Vocabulary</a></li>
                                <li>
                                    <details open>
                                        <summary>Idioms</summary>
                                        <ul>
                                            <li><a href="#">Idiom 1</a></li>
                                            <li><a href="#">Idiom 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="#">Listening Comprehension</a></li>
                    <li><a href="#">Speaking Practice</a></li>
                    <li><a href="#">Reading Skills</a></li>
                    <li><a href="#">Writing Skills</a></li>
                </ul>
            </div >
        </div >


    );
}

export default NavSidebar;