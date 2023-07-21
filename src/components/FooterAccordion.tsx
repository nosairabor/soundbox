import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { GoArrowUpRight } from 'react-icons/go';
import {BsChevronRight} from "react-icons/bs";
import { IoMail } from 'react-icons/io5';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

interface PropTypes {
    isOpen: boolean[];
    activeLink: number | null;
    handleLinkClick: (index: number) => void;
}

const FooterAccordion:React.FC<PropTypes> = ({
    isOpen,
    activeLink,
    handleLinkClick,
}) => {
    
    return (
        <div className="w-[360px] mt-[50px]  md:w-full max-w-[720px]  md:px-0">
            <div className="mt-[20px] mb-[20px]">
                <img src={require('../pictures/yep-logo.png')}
                    className="h-[39.2px] w-[110px]"
                />
            </div>
            
            <div
                className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[20px] `}
                onClick={() => handleLinkClick(0)}
            >
                <p className="text-[20px]">Personal</p>
                <div className={``}>
                    {isOpen[0] ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </div>
            <div className="">
                {isOpen[0] ? (
                    <div className="accordion-transition pb-2">
                        <p className="text-[17px] font-[400] ">Digital Banking</p>
                        <p className="text-[17px] font-[400] mt-[20px]">Cards</p>
                        <p className="text-[17px] font-[400] mt-[20px]">SMS Pay</p>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div
                className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[20px] `}
                onClick={() => handleLinkClick(1)}
            >
                <p className="">Business</p>
                <div className={``}>
                    {isOpen[1] ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </div>
            <div className="">
                {isOpen[1] ? (
                    <div className="accordion-transition pb-2">
                        <div className="flex space-x-1">
                                <p className="text-[17px] font-[400] mt-[px]">PayCenter</p>
                                <GoArrowUpRight className="mt-[7px] text-blue font-black"/>
                        </div>
                        <p className="text-[17px] font-[400] mt-[20px]">Payments</p>
                        <p className="text-[17px] font-[400] mt-[20px]">Pricing</p>
                        
                        <p className="text-[17px] font-[400] mt-[20px]">SoundBox</p>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div
                className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t border-b py-[20px] ${activeLink === 2 ? "border-b-0" : ""}`}
                onClick={() => handleLinkClick(2)}
            >
                <p className="">Company</p>
                <div className={``}>
                    {isOpen[2] ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </div>
            <div className="">
                {isOpen[2] ? (
                    <div className="accordion-transition pb-2">
                        <p className="text-[17px] font-[400] mt-[0px]">About</p>
                        <p className="text-[17px] font-[400] mt-[20px]">Documentations</p>
                        <p className="text-[17px] font-[400] mt-[20px]">Terms and Conditions</p>
                        <p className="text-[17px] font-[400] mt-[20px]">Privacy Policy</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
            
            <div className="mt-[30px] pb-[50px] space-y-[20px]">
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <IoMail className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">hello@getyep.co</p>
                    </div>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <AiFillFacebook className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">Facebook</p>
                    </div>
                   <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <AiFillInstagram className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">Instagram</p>
                    </div>
                   <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <AiOutlineTwitter className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">Twitter</p>
                    </div>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <AiFillLinkedin className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">LinkedIn</p>
                    </div>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <AiFillYoutube className="mt-[2px] text-blue text-[26px]"/>
                        <p className="text-secondary text-[20px] font-[450]">YouTube</p>
                    </div>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                
            </div>
        </div>
       
    );
}
 
export default FooterAccordion;