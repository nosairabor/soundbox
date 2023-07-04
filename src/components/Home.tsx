import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Home = () => {
  
  const [isXlScreen, setIsXlScreen] = useState(false);
  


  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="circular-font">
      <div className="flex items-center justify-center">
        <div className="flex mt-[90px] flex-col justify-center items-center xl:mx-[105px] mt-[178px]">
          <div className="text-[44px] leading-[49px] xl:text-[60px] font-bold xl:leading-[75.9px]">
            <span className="header-gradient">Instant & Audible</span>
            <br />
            Notification of
            <br /> Payments
          </div>
          <div className="mt-[30px] text-[18px] xl:mt-[40px] xl:text-[20px] xl:-ml-[65px]  font-[450] leading-[26px]">
            Now you no longer have to keep customers
            <br /> waiting. Soundbox confirms payments
            <br /> instantly and audibly.
          </div>
          <div className="flex space-x-[20px] text-[16px] mt-[40px] xl:-ml-[65px]">
            <div
              className="w-[154px] h-[45px] py-2  border border-blue font-medium rounded-[100px] bg-blue 
              text-center text-white xl:px-[20px] xl:py-[13px] xl:w-[auto] xl:h-[auto]"
            >
              <Link to="">Get Device Now</Link>
            </div>
            <div 
              className="w-[185px] h-[45px] justify-center py-2 text-white space-x-2 font-medium bg-black flex border
                border-black rounded-[100px] text-center xl:py-[13px] xl:px-[20px] xl:w-[auto] xl:h-[auto]"
            >
              <Link to="">View Quick Demo</Link>
              <img
                src={require("../pictures/side-arrow.png")}
                className="-mt-[3px]"
                alt="View Quick Demo"
              />
            </div>
          </div>
        </div>
        <div className="mt-[90px]">
          <img
            src={require("../pictures/Vector.png")}
            className="hidden xl:block w-full h-full"
          />
        </div>
      </div>
      <div className="mt-[50px] flex xl:hidden">
        <img
              src={require("../pictures/sls-mobile.png")}
              className="grow"
        />
      </div>

      <div className="flex flex-col items-center space-y-[20px] xl:flex xl:flex-row xl:space-x-[30px] mt-[60px]">
        <div className="bg-[#E1EBFB] w-[368px] h-[402px] xl:w-[863px] xl:h-[357px] xl:ml-[80px] rounded-xl p-5">
          <p className="text-[18px] text-blue">Security</p>
          <div className="xl:flex xl:mt-[200px] xl:space-x-[190px]">
          {!isXlScreen && (
          <div>
            <img
              src={require("../pictures/image1507.png")}
              className="mt-[30px] pic bg-[#E1EBFB] h-[149px] w-[130px]"
            />
          </div>
        )}
            <div className="mt-[60px] xl:m-0">
              <h1 className="text-[26px] font-bold">Reduce Overhead Costs</h1>
              <p className="leading-[25px] mt-2 font-[450] xl:leading-[20px]">
                Staff no longer have to call or message you to
                <br />
                confirm payments. Soundbox will notify them
              </p>
            </div>
            <div className="py-10">
              <img
                src={require("../pictures/percentage.png")}
                className="pic bg-[#E1EBFB] hidden xl:block -mt-[210px] w-full"
              />
            </div>
            
          </div>
        </div>
        <div className="bg-blue h-[357px] w-[368px] xl:w-[387px] xl:h-[357px] rounded-xl text-white p-5 ">
          <p className="text-[18px]">Value</p>
          <div className="mt-[190px]">
            <h1 className="text-[26px] font-bold">Get Paid Easily</h1>
            <p className=" mt-2 font-[450] leading-[20px]">
              All funds are instantly paid to your
              <br /> account.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[100px] bg-[#F4F6F8] xl:flex">
        <div className="relative xl:ml-[80px] py-[80px] flex flex-row items-center justify-center">
          <div className="absolute top-[78px] left-[207px] xl:left-[340px] xl:top-[70px]">
            <img src={require("../pictures/ellipse15.png")}
             className="h-[14px] w-[14px] xl:w-[25.48px] xl:h-[25.48px]"/>
          </div>
          <img
            src={require("../pictures/sls-1.png")}
            className="rounded-[18.2px] w-[200px] h-[332px] xl:w-[364px] xl:h-[604px]"
          />
          <div
            className="absolute flex justify-center items-center
            right-[55px] bottom-[110px] w-[159px] h-[54px] xl:bottom-[130px] xl:-right-[250px]
                 bg-white xl:w-[289px] xl:h-[98px] rounded-[25px]"
          >
            <div className="bg-[#34A853] rounded-[100px] w-[32.81px] h-[32.81px] xl:w-[59px] xl:h-[59px] flex items-center justify-center">
              <img
                src={require("../pictures/check-circle-broken.png")}
                className=""
              />
            </div>
            <div className="flex flex-col ml-[20px]">
              <p className="text-[10.94px] xl:text-[19.9px]">You just got paid</p>
              <p className="text-[13.6px] xl:text-[24.8px]">N23,500</p>
            </div>
            <div className="absolute -right-[20px] top-[35px] xl:-right-[25px] xl:top-[60px]">
              <img src={require("../pictures/ellipse14.png")} alt="ellipse"
              className="w-[31px] h-[31px] xl:h-[54.4px] w-[54.4px]" />
            </div>
          </div>
          <div className="-mt-10 ml-[20px] xl:hidden">
            <img
              src={require("../pictures/sls-2.png")}
              className=" rounded-[18.2px] h-[180px] w-[152px] "
            />
          </div>
          
        </div>
        <div className="hidden xl:block ml-[50px] mt-[190px]">
          <img
            src={require("../pictures/sls-2.png")}
            className=" rounded-[18.2px] h-[180px] w-[152px] xl:h-[328px] xl:w-[277px] "
          />
        </div>
        
        <div className="flex flex-col items-center xl:items-start xl:mt-[250px] xl:ml-[110px]">
          <h1 className="text-[32px] xl:text-[40px] font-bold
          leading-[40px] xl:leading-[50px]">
            Payment Received and
            <br /> Announced, <span className="text-blue">in Seconds.</span>
          </h1>
          <p className="text-[18px] xl:text-[20px] leading-[25px] 
            xl:leading-[26px] font-[450] mt-[25px]">
            Multiple transactions announced within
            <br /> seconds. Our soundbox notifies you of your
            <br /> customer's payments within seconds.
          </p>
          <div
            className="-translate-x-[86px] xl:translate-x-0 mt-[25px] border border-blue rounded-[100px]
                text-white text-center mb-[50px] xl:mb-0 w-[180px] py-[13px] px-[20px] bg-blue font-[500]"
          >
            Get Device Now
          </div>
        </div>
      </div>

      <div className="xl:ml-[80px] w-[368px] mx-auto xl:mx-0 md:w-full mt-[100px] space-y-[80px]">
        <h1 className="text-[40px] font-[700] xl:ml-0">How it works</h1>
        <div className="flex justify-center xl:justify-start xl:flex-row 
          flex-col space-y-[30px] xl:space-y-0 xl:space-x-[50px]">
          <div className="">
            <div className="">
              <img
                src={require("../pictures/scan.png")}
                className="text-blue"
              />
            </div>
            <h1 className="text-[26px] font-[700] mt-[30px]">Step 1</h1>
            <div className="text-[18px] xl:text-[20px] font-[450] mt-[29px]">
              Customers makes a transfer of the required
              <br /> amount to the merchant's account
              <br /> displayed on the soundbox.
            </div>
          </div>
          <div className="">
            <div className="">
              <img
                src={require("../pictures/bell-checked.png")}
                className="text-blue"
              />
            </div>
            <h1 className="text-[26px] font-[700] mt-[30px]">Step 2</h1>
            <div className="text-[18px] xl:text-[20px] font-[450] mt-[29px]">
              Sound box audibly notifies merchant and
              <br />
              customer of payment confirmation and
              <br /> amount.
            </div>
          </div>
          <div className="">
            <div className="">
              <img
                src={require("../pictures/check-marks.png")}
                className="text-blue"
              />
            </div>
            <h1 className="text-[26px] font-[700] mt-[30px]">Step 3</h1>
            <div className="text-[18px] xl:text-[20px] font-[450] mt-[29px]">
              Merchant can confirm that account has
              <br /> been credited.
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
    </div>
  );
};

export default Home;
