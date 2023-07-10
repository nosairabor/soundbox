import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <div className="flex mt-[70px] flex-col justify-center items-center md:mx-[30px]  xl:mx-[105px] mt-[178px]">
          <div className="text-[44px] md:mt-[30px] mt-0 xl:mt-0 
            md:-ml-2 xl:ml-0 ml-0 leading-[49px] xl:text-[60px] font-bold xl:leading-[75.9px]">
            <span className="header-gradient">Instant & Audible</span>
            <br />
            Notification of
            <br /> Payments
          </div>
          <div className="text-secondary mt-[30px] text-[18px] xl:mt-[40px]   xl:text-[20px] xl:-ml-[72px] md:ml-0 font-[450] leading-[26px]">
            Now you no longer have to keep customers
            <br /> waiting. Soundbox confirms payments
            <br /> instantly and audibly.
          </div>
          <div className="flex space-x-[20px] text-[16px] mt-[40px] xl:-ml-[65px]">
            <div
              className="w-[154px] h-[45px] py-2  border border-blue font-medium rounded-[100px] bg-blue 
              text-center text-white xl:px-[20px] xl:py-[13px] xl:w-[auto] xl:h-[auto]"
            >
              <Link to="/pricing">Get Device Now</Link>
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
            className="hidden md:block w-full  max-w-[738px]
             max-h-[679px]  h-full"
          />
        </div>
      </div>
      <div className="mt-[50px] flex xl:hidden">
        <img
              src={require("../pictures/sls-mobile.png")}
              className="grow"
        />
      </div>

      <div className="flex flex-col items-center space-y-[20px] md:justify-center 
         md:flex-row md:space-x-4 md:mx-2 xl:mx-0 xl:flex sm:flex-row xl:space-x-[30px] mt-[60px]">
        <div className="bg-[#E1EBFB] w-full max-w-[368px] md:max-w-[863px] 
          h-[357px] rounded-xl p-3">
          <p className="text-[18px] text-blue">Security</p>
          <div className=" flex xl:justify-end py-1 xl:pr-7 xl:translate-y-[12px]">
              <img
                src={require("../pictures/percentage.png")}
                className="pic bg-[#E1EBFB] w-full max-w-[200px] h-[217px] "
              />
          </div>
            
          <div className="">
          
            <div className=" xl:m-0">
              <h1 className="text-[26px] font-bold">Reduce Overhead Costs</h1>
              <p className="text-secondary leading-[25px] mt-1 font-[450] xl:leading-[20px]">
                Staff no longer have to call or message you to
                <br />
                confirm payments. Soundbox will notify them
              </p>
            </div>
            
          </div>
        </div>
        <div className="bg-blue h-[357px] w-full max-w-[387.89px] 
          rounded-xl text-white flex flex-col justify-between p-3 sm:-translate-y-3"
        >
          {/* Value */}
          <p className="text-[18px]">Value</p>
          <div className="flex flex-col">
            <h1 className="text-[26px] font-bold">Get Paid Easily</h1>
            <p className="mt-2 font-[450] leading-[20px]">
              All funds are instantly paid to your
              <br /> account.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[100px] bg-[#F4F6F8] lg:flex sm:items-center sm:justify-center">
        <div className="relative   py-[80px] flex flex-row 
         items-center justify-center ">
          <div className="absolute top-[73px] left-[195px] xl:left-[340px] xl:top-[70px]">
            <img src={require("../pictures/ellipse15.png")}
             className="h-[14px] w-[14px] xl:w-[25.48px] xl:h-[25.48px]"/>
          </div>
          <img
            src={require("../pictures/sls-1.png")}
            className="rounded-[18.2px] max-w-[200px] h-[332px]
            w-full sm:max-w-[364px] sm:h-[604px]"
          />
          <div
            className="absolute flex justify-center items-center
            right-[75px] bottom-[95px] w-[159px] h-[54px] md:bottom-[130px] xl:right-[70px]
              md:right-[250px]  bg-white xl:w-[289px] xl:h-[98px] rounded-[25px]"
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
          <div className="-mt-10 ml-[20px] md:ml-[40px] ">
            <img
              src={require("../pictures/sls-2.png")}
              className=" rounded-[18.2px]  
              w-auto h-auto sm:max-w-[277px] "
            />
          </div>
          
        </div>
        {/* <div className="hidden xl:block ml-[50px] mt-[190px]">
          <img
            src={require("../pictures/sls-2.png")}
            className=" rounded-[18.2px] h-[180px] w-[152px] xl:h-[328px] xl:w-[277px] "
          />
        </div> */}
        
        <div className="flex flex-col items-center xl:items-start  md:ml-[30px]   xl:ml-[110px]">
          <h1 className="text-[32px] xl:text-[40px] font-bold
          leading-[40px] xl:leading-[50px]">
            Payment Received and
            <br /> Announced, <span className="text-blue">in Seconds.</span>
          </h1>
          <p className="text-secondary text-[17px] xl:text-[20px] leading-[25px] 
            xl:leading-[26px] font-[450] mt-[25px] md:mt-[15px] xl:mt-[25px]">
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

      <div className=" md:ml-[20px] flex flex-col justify-center
          md:w-full mt-[100px] space-y-[80px]"
      >
        <h1 className="text-[40px] font-[700] ml-4 ">How it works</h1>
        <div className="flex items-center justify-center  
          md:flex-row  flex-col items-center space-y-[30px]
           md:space-y-0 xl:space-y-0 xl:space-x-[50px]">
          <div className="ml-4 md:ml-0 width-full max-w-[368px] ">
            <div className="">
              <img
                src={require("../pictures/scan.png")}
                className="text-blue"
              />
            </div>
            <h1 className="text-[26px] font-[700] mt-[30px]">Step 1</h1>
            <div className="text-[18px]  whitespace-normal xl:text-[20px] font-[450] mt-[29px]">
              Customers makes a transfer of the required <br/>
               amount to the merchant's account
              <br/> displayed on the soundbox.
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
            <div className="text-[18px] whitespace-normal xl:text-[20px] font-[450] mt-[29px]">
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
            <div className="text-[18px] xl:text-[20px] whitespace-normal font-[450] mt-[29px]">
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

