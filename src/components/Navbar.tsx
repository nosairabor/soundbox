// import Logo from "../pictures/yep-logo.svg"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import {BsXLg} from "react-icons/bs"


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [hamburger, setHamburger] = useState(false);  //toogle the mobile-hamburger menu
    const location = useLocation();

    const handleToggleClick = (index: number) => {
        setNav(false);
    };
    const toggleHamburger = () => {
        setHamburger(prevHamburger => !prevHamburger);
    };
    return (
        <div className="relative z-[100]">
            <div className="mx-[30px] flex justify-between xl:flex xl:justify-between xl:mx-[105px] nunito-font" >
                <div className=" mt-[25px]">
                    <div className="mx-0 h-[32px] w-[90px] xl:h-[50px] xl:w-[140px]">
                        <img src={require('../pictures/yep-logo.png')}
                        />
                    </div>
                    <div className="hidden xl:block opacity-80 text-[10px] ml-[51px] -mt-[10px] text-[#382B3D] 
                    text-primary">Powered by <span className="font-bold">SLS MFB</span></div>
                </div>
                <div className="hidden xl:flex mt-[35px] text-[16px] font-semibold">
                    <Link to="/about" 
                        className={`ml-10 ${
                            location.pathname === "/about" || location.pathname.startsWith("/about/")
                            ? "color-toggle-div clicked"
                            : "unclicked"
                        }`}
                        onClick={() => handleToggleClick(0)}>
                            About Us
                    </Link> 
                    <Link to="/pricing" 
                        className={`ml-10 ${
                            location.pathname === "/pricing" || location.pathname.startsWith("/pricing/")
                            ? "color-toggle-div clicked"
                            : "unclicked"
                        }`}
                        onClick={() => handleToggleClick(1)}>
                            Pricing
                    </Link>
                    <Link to="/developers" 
                        className={`ml-10 ${
                            location.pathname === "/developers" || location.pathname.startsWith("/developers/")
                            ? "color-toggle-div clicked"
                            : "unclicked"
                        }`}
                        onClick={() => handleToggleClick(2)}>
                            Developers
                    </Link>
                    <Link to="/" 
                        className={`ml-10 ${
                            location.pathname === "/" || location.pathname.startsWith("/soundbox/")
                            ? "color-toggle-div clicked"
                            : "unclicked"
                        }`}
                        onClick={() => handleToggleClick(3)}>
                            Soundbox
                    </Link>
                
                    <div className="ml-10 -translate-y-[10px] border border-blue 
                    rounded-[10px] text-center px-[20px] py-[10px]  text-blue">
                        Sign in
                    </div>
                    <div className="ml-2 border border-blue -translate-y-[10px] rounded-[10px] bg-blue text-center text-white px-[20px] py-[10px]">Create Account</div>
                </div>
                <div className="mt-[25px] xl:hidden" onClick={toggleHamburger}>
                    {hamburger?
                        (<BsXLg className="text-[26px]"/>)
                        :
                        (<RxHamburgerMenu className="text-[26px] "/>)
                    }
                </div>
                
            </div>
            {/* Mobile Nav */}
            <div className={`mobile-nav  text-[18px] h-[393px]  w-full bg-white  ${hamburger?"block":"hidden"} xl:hidden` }>
                <div className="sm:flex sm:flex-col sm:items-center">
                    <div className="p-3">
                        <Link to="/about" 
                            className={`ml-[10px] ${
                                location.pathname === "/about" || location.pathname.startsWith("/about/")
                                ? "color-toggle-div clicked"
                                : "unclicked"
                            }`}
                            onClick={() => handleToggleClick(0)}>
                                About Us
                        </Link>
                    </div> 
                    <div className="p-3">
                        <Link to="/pricing" 
                            className={`ml-[10px] ${
                                location.pathname === "/pricing" || location.pathname.startsWith("/pricing/")
                                ? "color-toggle-div clicked"
                                : "unclicked"
                            }`}
                            onClick={() => handleToggleClick(1)}>
                                Pricing
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to="/developers" 
                            className={`ml-[10px] ${
                                location.pathname === "/developers" || location.pathname.startsWith("/developers/")
                                ? "color-toggle-div clicked"
                                : "unclicked"
                            }`}
                            onClick={() => handleToggleClick(2)}>
                                Developers
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to="/" 
                            className={`ml-[10px] ${
                                location.pathname === "/" || location.pathname.startsWith("/soundbox/")
                                ? "color-toggle-div clicked"
                                : "unclicked"
                            }`}
                            onClick={() => handleToggleClick(3)}>
                                Soundbox
                        </Link>
                    </div>
                    <div className="p-3 mt-5 mx-auto text-center md:mx-0 text-blue md:ml-5 
                        border-blue border rounded-lg h-[56px] w-[355px]
                        sm:w-full sm:max-w-[600px]">
                        Sign In
                    </div>
                    <div className="mx-auto md:mx-0 mt-5 text-center text-white md:ml-5 
                        bg-blue border-blue border rounded-lg py-3 w-[355px]
                        sm:w-full sm:max-w-[600px]">
                        Create Account
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;