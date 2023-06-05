import { useState, useEffect } from "react";
import {
    Typography,
} from "@material-tailwind/react";
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    // const [openNav, setOpenNav] = useState(false);

    // useEffect(() => {
    //     window.addEventListener(
    //         "resize", () => window.innerWidth >= 960 && setOpenNav(false));
    // }, []);



    // const navigate = useNavigate();


    const navList = (
        <ul className="flex mb-0 -mt-2 flex-row items-center gap-10 mx-auto justify-center cursor-pointer">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 animate-fadeInLeft animate-delay-[150ms]">
                <a href="#" className=" relative items-center group before:absolute before:left-0 before:right-1 before:-bottom-1 before:h-1.5 before:origin-right before:scale-x-0 before:bg-tan-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 uppercase font-bold text-base hover:text-gray-900">Resources</span>
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 animate-fadeInLeft animate-delay-[300ms]">
                <a href="#" className=" relative items-center group before:absolute before:left-0 before:right-1 before:-bottom-1 before:h-1.5 before:origin-right before:scale-x-0 before:bg-crystal-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 uppercase font-bold text-base hover:text-gray-900">Events</span>
                </a>
            </Typography>
            <a href="">
                <img src={Logo} alt="Logo"  className="w-[5rem]  animate-fadeInDown animate-delay-[400ms] " />
            </a>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 animate-fadeInRight animate-delay-[300ms]">
                <a href="#" className="relative items-center group  before:absolute before:left-1 before:right-1 before:-bottom-1 before:h-1.5 before:origin-right before:scale-x-0 before:bg-crystal-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 uppercase font-bold text-base hover:text-gray-900">Forum</span>
                </a>
            </Typography>
            <Typography as="li"variant="small" color="blue-gray" className="p-1 animate-fadeInRight animate-delay-[150ms]">
                <a href="#" className=" relative items-center group  before:absolute before:left-1 before:right-1 before:-bottom-1 before:h-1.5 before:origin-right before:scale-x-0 before:bg-tan-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 uppercase font-bold text-base hover:text-gray-900">Bazaar</span>
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="mx-auto px-8 py-3 bg-opacity-60 bg-primary-700 z-50 overflow-hidden inset-x-0 rounded-b-3xl flex items-center justify-center">
            <div className="absolute left-[2rem] text-right">
                <a href="#" class="hidden lg:inline-block animate-fadeInLeft relative items-center justify-start px-[0.9rem] py-2 overflow-hidden font-bold rounded-xl group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-600 opacity-[0%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-nyanza-600 opacity-100 group-hover:-translate-x-4"></span>
                    <span class="relative w-full text-left text-gray-600 uppercase text-sm transition-colors duration-200 ease-in-out">
                        <FontAwesomeIcon icon={faRightToBracket} className="text-gray-600 mr-2 fa-xl" />
                        Sign Up
                    </span>
                    <span class="absolute inset-0 border-[1.5px] border-gray-600 rounded-xl"></span>
                </a>
            </div>

            <div className="container flex items-center justify-between w-auto">
                <div className="block">{navList}</div>
            </div>
            <div className="absolute right-[2rem] text-right animate-fadeInRight">
                <h2 href="#" className=" relative items-center group  before:absolute before:left-1 before:right-1 before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-nyanza-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 uppercase font-extrabold text-2xl hover:text-gray-900 cursor-default">Homefront</span>
                </h2>
            </div>


        </div>
    );
}