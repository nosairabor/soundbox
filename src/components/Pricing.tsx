import HowItWorks from "./HowItWorks";
import PricingReusable from "./PricingReusable";


const Pricing = () => {
  return (
    <div className="circular-font bg-[#F4F6F8] md:bg-white">
      <div className="flex flex-col items-center justify-center h-[359px] bg-[#F4F6F8] relative">
        <h1 className=" header-gradient2 font-bold text-[34px] md:text-[50px] xl:text-[60px]">Pricing</h1>
        <p className="z-[1] mt-[17px] font-[450] text-[18px] md:text-[20px] text-center">
          Now you no longer have to keep customers waiting. 
          Soundbox<br className="hidden sm:block xl:hidden"/>
          <br className="hidden xl:block"/> confirms payments instantly and audibly.
        </p>
      </div>
      <div className="hidden xl:block absolute top-[81px] right-[20px] z-0">
        <img src={require("../pictures/pricing1.png")} />
      </div>
      <div className="hidden xl:block absolute right-[1px] top-[119px] z-0">
        <img src={require("../pictures/pricing2.png")} />
      </div>

      <div className="flex flex-col mx-auto xl:w-full  rounded-xl xl:rounded-none">
        <div className="hidden md:block xl:block mt-[40px] xl:mt-[100px]">
          <h2 className="text-center text-[26px] text-blue">
            Product Packages
          </h2>
          <p className="text-center text-[20px] mt-[20px]">
            Everything you need to know about the SoundBox devices.
          </p>
        </div>
        <div className="mt-[40px] xl:mt-[80px] flex flex-col md:flex-row xl:flex-row items-center justify-center gap-x-[30px]">
          
          <PricingReusable
            title="Yep! Soundbox with screen"
            imageUrl={require('../pictures/yep-soundbox2.png')}
            upfrontPayment="N40,800"
            monthlyPayment1="N0.00"
            convenienceFee1="N20.00"
            initiatePayment1="N25,000"
            monthlyPayment2="N2540.67"
            convenienceFee2="N20.00"
            initiatePayment2="Not applicable"
            monthlyPayment3="Not applicable"
            convenienceFee3="Not applicable"
          >
            <div className="xl:hidden md:hidden mt-[40px]">
              <h2 className="text-center text-[26px] text-blue">
                Product Packages
              </h2>
              <p className="p-2 text-center text-[20px] mt-[20px]">
                Everything you need to know about the SoundBox devices.
              </p>
            </div>
          </PricingReusable>
          <PricingReusable
            title="Yep! Soundbox without screen"
            imageUrl={require('../pictures/yep-soundbox2.png')}
            upfrontPayment="N30,000"
            monthlyPayment1="N0.00"
            convenienceFee1="N20.00"
            initiatePayment1="N15,000"
            monthlyPayment2="N2,150"
            convenienceFee2="N20.00"
            initiatePayment2="N5,000"
            monthlyPayment3="N3,400"
            convenienceFee3="N20.00"
          />
        </div>
      </div>

      <HowItWorks/>
      
    </div>
  );
};

export default Pricing;
