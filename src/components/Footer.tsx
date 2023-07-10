import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "./Accordion";
import {GoArrowUpRight} from "react-icons/go"
import { BsChevronDown } from "react-icons/bs";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {IoMail} from "react-icons/io5"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import FooterAccordion from "./FooterAccordion";

const Footer = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);//useState to color the Accordion items one at a time
    const [isOpen, setIsOpen] = useState<boolean[]>(Array(7).fill(false));
    
    const handleLinkClick = (index:number) => {
        setActiveLink(index);
        setIsOpen((prevOpenSections) => {
            const newOpenSections = prevOpenSections.map((section, i) => (i === index ? !section : false));
            return newOpenSections;
        });
    };

    return (
        <div className="circular-font">
            <div className="xl:ml-[80px] mt-[80px] xl:mt-[150px] flex 
            flex-col    ">
                <h1 className="text-[32px] w-[368px] xl:w-[529px] 
                 leading-[40px] ml-[20px] xl:leading-normal xl:text-[40px] font-[700]">
                    Got Questions?<br/>Sure We Can Answer <br className="xl:hidden"/> Them.
                </h1>
                <p className="text-[18px] ml-[20px] mt-[20px] xl:text-[20px] font-[450]"> 
                    We answered questions so you don't have to<br className="xl:hidden"/> ask them.
                </p>
                <Accordion handleLinkClick={handleLinkClick}
                    isOpen={isOpen}
                    activeLink={activeLink}
                />
            </div>

            <div className="text-white mt-[80px] flex flex-col justify-center  xl:flex-row">
                <div className="w-full xl:max-w-[850px] xl:h-[800px] h-[729px] bg-blue ">
                    <h1 className="xl:ml-[70px] mt-[50px] ml-[30px] xl:ml-0 text-[32px] xl:mt-[100px]
                        xl:text-[60px] font-[700]">
                        Join other<br/> merchants on the<br/> Yep! Side of Life.
                    </h1>
                    <p className="mt-[40px] ml-[30px] flex flex-col text-[18px] xl:ml-[70px] xl:text-[26px] font-[450]">
                    No more checking of phones every few<br className="xl:hidden"/> minutes, no <br className="hidden xl:block"/>
                    more missed payments, and no more panic from<br className="hidden xl:block"/> 
                    delayed payment<br className="xl:hidden"/> confirmation!
                    </p>
                    <div className="flex flex-col ml-[30px] space-y-[20px] 
                        xl:space-y-0 xl:flex-row xl:space-x-10 xl:ml-[70px] mt-[40px]"
                    >
                        <div>
                            <h2 className="text-[40px] font-[500]">29,000+</h2>
                            <p className="text-[20px] xl:text-[26px] font-[450]">Merchants</p>
                        </div>
                        <div>
                            <h2 className="text-[40px] font-[500]">2</h2>
                            <p className="text-[20px] xl:text-[26px]">Continents</p>
                        </div>
                        <div>
                            <h2 className="text-[40px] font-[500]">N100B+</h2>
                            <p className="text-[20px] xl:text-[26px]">Transactions completed</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[486.2px] md:h-[850.2px] xl:max-w-[742px] xl:h-[824px]">
                    <img src={require('../pictures/image1500.png')} alt="image1500.png"
                    className=""/>
                </div>
            </div>

            <div className="hidden xl:block">
                <div className="mx-[105px] my-[50px] border-b border-grey">
                    <div className="">
                        <img src={require('../pictures/yep-logo.png')}
                            className="h-[39.2px] w-[110px]"
                        />
                    </div>
                    <div className="flex mt-[40px] text-black  justify-between pb-12">
                        <div className="text-secondary">
                            <p className="text-[18px] font-[450] mb-[34px] text-header">Personal</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Digital Banking</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Cards</p>
                            <p className="text-[20px] font-[450] mt-[20px]">SMS Pay</p>
                        </div>
                        <div className="text-secondary">
                            <p className="text-[18px] font-[450] mb-[34px] text-header">Business</p>
                            <div className="flex space-x-1">
                                <p className="text-[20px] font-[450] mt-[px]">PayCenter</p>
                                <GoArrowUpRight className="mt-[7px] text-blue font-black"/>
                            </div>
                            <p className="text-[20px] font-[450] mt-[20px]">Payments</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Pricing</p>
                            
                            <p className="text-[20px] font-[450] mt-[20px]">SoundBox</p>
                        </div>
                        <div className="text-secondary">
                            <p className="text-[18px] font-[450] mb-[34px] text-header">Company</p>
                            <p className="text-[20px] font-[450] mt-[20px]">About</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Documentations</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Terms and Conditions</p>
                            <p className="text-[20px] font-[450] mt-[20px]">Privacy Policy</p>
                        </div>
                        <div className="w-full max-w-[196px] text-header -m-1">
                            <div className="flex justify-between  border border-grey 
                                rounded-[20px] py-[10px] px-[20px]">
                                <div className="flex space-x-[8px]">
                                    <img src={require('../pictures/mask-group.png')}
                                        className=""
                                    />
                                    <p>Nigeria</p>
                                </div>
                                
                                <BsChevronDown className=" mt-[5px]"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex mx-[105px] justify-between pb-[50px]">
                    <div className="flex space-x-[6px]">
                        <IoMail className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-[20px] font-[450]">hello@getyep.co</p>
                    </div>
                    <div className="flex space-x-[50px]">
                        <div className="flex space-x-[6px]">
                            <AiFillFacebook className="mt-[2px] text-blue text-[26px]"/>
                            <p className="text-[20px] font-[450]">Facebook</p>
                        </div>
                        <div className="flex space-x-[6px]">
                            <AiFillInstagram className="mt-[2px] text-blue text-[26px]"/>
                            <p className="text-[20px] font-[450]">Instagram</p>
                        </div>
                        <div className="flex space-x-[6px]">
                            <AiOutlineTwitter className="mt-[2px] text-blue text-[26px]"/>
                            <p className="text-[20px] font-[450]">Twitter</p>
                        </div>
                        <div className="flex space-x-[6px]">
                            <AiFillLinkedin className="mt-[2px] text-blue text-[26px]"/>
                            <p className="text-[20px] font-[450]">LinkedIn</p>
                        </div>
                        <div className="flex space-x-[6px]">
                            <AiFillYoutube className="mt-[2px] text-blue text-[26px]"/>
                            <p className="text-[20px] font-[450]">YouTube</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer Accordion */}
            <div className="xl:hidden  flex flex-col items-center">
                <FooterAccordion handleLinkClick={handleLinkClick}
                        isOpen={isOpen}
                        activeLink={activeLink}
                />
            </div>
            
        </div>
    );
}
 
export default Footer;