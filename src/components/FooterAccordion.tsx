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
        <div className="w-[360px] mt-[50px]">
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
                    <IoMail className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[150px] font-[450]">hello@getyep.co</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <AiFillFacebook className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[210px] font-[450]">Facebook</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <AiFillInstagram className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[210px] font-[450]">Instagram</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <AiOutlineTwitter className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[240px] font-[450]">Twitter</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <AiFillLinkedin className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[220px] font-[450]">LinkedIn</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                <div className="flex justify-between">
                    <AiFillYoutube className="mt-[2px] text-blue text-[26px]"/>
                    <p className="text-[20px] -ml-[220px] font-[450]">YouTube</p>
                    <BsChevronRight className="mt-1 text-[20px]"/>
                </div>
                
            </div>
        </div>
       
    );
}
 
export default FooterAccordion;