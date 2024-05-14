import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Theme from "../theme/Theme";



const SideBarEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Mobile Menu Button */}
            <button
                className="block sm:hidden fixed top-0 right-0 p-4"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isOpen ? "M6 18 17.94 6M18 18 6.06 6" : "M5 7h14M5 12h14M5 17h14"
                        }
                    />
                </svg>
            </button>
            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="flex flex-col items-center h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-neutral-300">
                    <a
                        // href="https://flowbite.com/"
                        className="flex items-center ps-2.5 mb-5"
                    >
                        <img
                            src="https://www.svgrepo.com/show/508281/book.svg"
                            className="h-6 me-3 sm:h-7"
                            alt=" Logo"
                        />
                        <span className="self-center text-3xl font-bold whitespace-nowrap text-cyan-500">
                            LogailiC
                        </span>
                        <Theme />
                    </a>

                    <ul className="space-y-4 mt-4 font-medium">
                        <li className="flex justify-center">
                            <img
                                className="h-32 w-32 rounded-full border border-gray-900"
                                src="https://www.svgrepo.com/show/474079/profile.svg"
                                alt="image description"
                            />
                        </li>
                        <li className="flex justify-center">
                            <h3 className="text-center border rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 text-white text-xl font-bold py-2 px-4 items-center">KARYAWAN</h3>
                        </li>
                        <li className="flex justify-center">
                            <ConnectButton
                                chainStatus="icon"
                                accountStatus="none"
                                label="Sign in"
                            />
                        </li>
                    </ul>
                </div>


            </aside>
        </div>
    );
};

export default SideBarEmployee;
