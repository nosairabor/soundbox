import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HowItWorks from "./HowItWorks";
import {BiSolidRightArrow} from "react-icons/bi"

const Home = () => {
  
  const [refA, inView] = useInView({
    
  });
  const [refB, inViewB] = useInView({
    
  });
  const [refC, inViewC] = useInView({
    
  });
  const [refD, inViewD] = useInView({

  });
  const [refE, inViewE] = useInView({

  });
  const [refF, inViewF] = useInView({

  })
  const [refG, inViewG] = useInView({

  })
  
  return (
    <div className="circular-font mx-auto">
      <section className="mt-[60px] lg:mt-[60px] flex flex-col lg:flex-row items-center justify-center px-[30px] lg:px-[60px] xl:px-[105px]">
        <div className="">
          <div
            ref={refC} 
            className={`text-4xl lg:text-5xl xl:text-6xl 
             leading-[49px] font-bold 
             ${inViewC?"animation-header":""}`}
          >
            <span className="header-gradient">Instant & Audible</span>
            <br />
            Notification of Payments
          </div>
          <div ref={refB} className={`w-full  max-w-[416px] text-secondary mt-[30px] text-[18px] xl:mt-[40px]   xl:text-[20px]  md:ml-0 font-[450] leading-[26px] ${inViewB?"animation-header":""}`}>
            Now you no longer have to keep customers
            waiting. Soundbox confirms payments
            instantly and audibly.
          </div>
          {/******* buttons *****/}
          <div ref={refD} className={`flex  space-x-[10px] text-[16px] mt-[40px] ${inViewD?"animation-header":""}`} >
            <div
              className="h-[45px] md:text-[16px] text-[12px] md:h-[56px] px-[30px] border border-blue font-medium rounded-[100px] bg-blue 
              text-center text-white whitespace-nowrap flex justify-center items-center"
            >
              <Link to="/pricing">Get Device Now</Link>
            </div>
            <div 
              className="whitespace-nowrap text-[12px] justify-center items-center md:text-[16px] h-[45px] md:h-[56px] px-[25px] text-white space-x-2 font-medium bg-black flex border
                border-black rounded-[100px] text-center"
            >
              <Link to="">View Quick Demo</Link>
              <div className="md:w-[25px] md:h-[25px] w-[10px] h-[10px] flex items-center justify-center  bg-white rounded-[50px] border border-white">
                <BiSolidRightArrow className="text-black text-[6px] md:text-[10px]"/>
              </div>
            </div>
          </div>
        </div>
        {/* soundbox image at the hero section */}
        <div className="mt-[90px]">
          <img
            src="https://app.yeppay.io/static/media/ImgSoundBox.4236dfcd86c1b1607aa2.png"
            className="h-[410px] lg:h-full object-cover lg:object-contain object-center w-full "
          />
        </div>
      </section>

      <div className="mt-[50px] flex md:hidden">
        <img
              src={require("../pictures/sls-mobile.png")}
              className="grow"
        />
      </div>

      <section className="flex flex-col space-y-[20px] md:justify-center 
         md:flex-row md:space-x-4 mx-[24px] md:mx-[60px]  xl:mx-[105px]   md:space-y-0
         xl:space-x-[30px] mt-[60px] "
      >
        <div 
        ref={refA}
        className={`flex flex-col bg-[#E1EBFB] 
            pt-[30px] pb-10 px-10 min-h-[345px] rounded-[20px] 
            xl:max-w-[813px] xl:w-full ${inView?"animation-a":""}` }
        >
          <p className="text-[18px] text-blue ">Security</p>
          <div className="flex flex-col flex-col-reverse lg:flex-row  flex-grow
            md:justify-between ">
          
            <div className="max-w-[345px] w-full flex flex-col justify-end self-end">
              <p className="text-xl lg:text-[26px] font-bold lg:leading-[32px]">Reduce Overhead Costs</p>
              <p className="text-secondary text-sm lg:text-[16px] leading-[25px] mt-4 font-[450] xl:leading-[20px]">
                Staff no longer have to call or message you to 
                 confirm payments. Soundbox will notify them
              </p>
            </div>
            <div className="py-2  xl:translate-y-[12px] mix-blend-darken">
              <img
                src={require("../pictures/percentage.png")}
                className="pic h-[149px] w-[130px] lg:w-[215px] lg:h-[247px] "
              />
            </div>
            
          </div>
        </div>
        {/* Value */}
        <div 
        ref={refA}
        className={`bg-blue rounded-[20px] text-white flex
          flex-col justify-between pt-[30px] pb-10 px-10 min-h-[345px] ${inView?"animation-b":""}`}
        >
          <p className="text-[18px]">Value</p>
          <div className="flex flex-col max-w-[345px] w-full">
            <h1 className="text-[26px] font-bold">Get Paid Easily</h1>
            <p className="text-white text-sm lg:text-[16px] leading-[25px] mt-2 font-[450] xl:leading-[20px]">
              All funds are instantly paid to your account.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-[30px] lg:space-y-0 pt-[102px] pb-[85px] px-[50px] xl:px-[105px] mt-[100px] bg-[#F4F6F8] grid grid-cols-1 lg:grid-cols-2 sm:items-center gap-5">
        <div className="">
          <img src="https://app.yeppay.io/static/media/adsBanner.6b8406c7365d0446f6c9d4f148111ea6.svg" alt="SoundBoxImg" className="w-full"/>
        </div>
        
        
        <div className=" flex flex-col  md:pl-[100px] justify-self-center self-center">
          <div className="">
            <h1 ref={refE} className={`text-[30px] md:leading-[50.6px] md:text-[40px] font-bold
            leading-[40px] xl:leading-[50px] ${inViewE?"animation-header":""}`}>
              Payment Received and
               Announced, <span className="text-blue">in Seconds.</span>
            </h1>
            <p ref={refF} className={`text-secondary text-[16px] xl:text-[20px] leading-[25px] 
              xl:leading-[26px] font-[450] mt-[25px] md:mt-[15px] xl:mt-[25px] ${inViewF?"animation-header":""}`}>
              Multiple transactions announced within
              seconds. Our soundbox notifies you of your
              customer's payments within seconds.
            </p>
            <div ref={refG}
              className={` xl:translate-x-0 mt-[25px] border border-blue rounded-[100px]
                  text-white text-center  w-[180px] py-[13px] px-[20px] bg-blue font-[500] ${inViewG?"animation-header":""}`}
            >
              Get Device Now
            </div>
          </div>
        </div>
      </section>

      <HowItWorks/>

      {/* Accordion */}
      
    </div>
  );
};

export default Home;

