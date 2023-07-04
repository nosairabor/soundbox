

const Pricing = () => {
  return (
    <div className="circular-font bg-[#F4F6F8] xl:bg-white">
      <div className="flex flex-col items-center justify-center h-[359px] bg-[#F4F6F8] relative">
        <h1 className=" header-gradient2 font-bold text-[34px] xl:text-[60px]">Pricing</h1>
        <p className="z-[1] mt-[17px] font-[450] text-[18px] xl:text-[20px] text-center">
          Now you no longer have to keep customers waiting. Soundbox
          <br className="hidden xl:block"/> confirms payments instantly and audibly.
        </p>
      </div>
      <div className="hidden xl:block absolute top-[81px] right-[20px] z-0">
        <img src={require("../pictures/pricing1.png")} />
      </div>
      <div className="hidden xl:block absolute right-[1px] top-[119px] z-0">
        <img src={require("../pictures/pricing2.png")} />
      </div>

      <div className="w-[368px] flex flex-col mx-auto xl:w-full  rounded-xl xl:rounded-none">
        <div className="hidden xl:block mt-[40px] xl:mt-[100px]">
          <h2 className="text-center text-[26px] text-blue">
            Product Packages
          </h2>
          <p className="text-center text-[20px] mt-[20px]">
            Everything you need to know about the SoundBox devices.
          </p>
        </div>
        <div className="mt-[40px] xl:mt-[80px] flex flex-col xl:flex-row items-center justify-center gap-x-[30px]">
          <div className="w-[338px]  xl:w-[517px] xl:border bg-white rounded-[10px] xl:border-grey">
            <div className="flex flex-col items-center">
              <div className="xl:hidden mt-[40px]">
                <h2 className="text-center text-[26px] text-blue">
                  Product Packages
                </h2>
                <p className="text-center text-[20px] mt-[20px]">
                  Everything you need to know about the SoundBox devices.
                </p>
              </div>
              <div className="mt-[30px]"><img src={require("../pictures/yep-soundbox1.png")}/></div>
              <h2 className="text-[24px] font-[500]">
                Yep! Soundbox with screen
              </h2>
              <button className="mt-[20px] py-[15px] px-[122px] xl:px-[188px] text-blue border rounded-[5px] border-blue">
                Buy Now
              </button>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium">Deluxe Package</p>
            <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px] xl:w-[457px]
             bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Upfront Payment</p>
                <p>N40,800</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment</p>
                <p>N0.00</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">N20.00</p>
              </div>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium">Executive Package</p>
            <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px]
             xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Initiate Payment</p>
                <p>N25,000</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment (12 months)</p>
                <p>N2540.67</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">N20.00</p>
              </div>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium">Deluxe Package</p>
            <div className="mb-[30px] lex flex-col rounded-[10px] justify-between mt-[10px] mx-auto 
              w-[318px] xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Initiate Payment</p>
                <p>Not applicable</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment</p>
                <p>Not applicable</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">Not applicable</p>
              </div>
            </div>
          </div>
          {/* Soundbox without screen */}
          <div className="w-[338px] xl:w-[517px] mt-[50px] mb-10 xl:mb-0 xl:mt-0 xl:border bg-white rounded-[10px] xl:border-grey">
            <div className="flex flex-col items-center">
              <div className="mt-[30px]"><img src={require("../pictures/yep-soundbox2.png")}/></div>
              <h2 className="text-[24px] font-[500]">
                Yep! Soundbox without screen
              </h2>
              <button className="mt-[20px] py-[15px] px-[122px] xl:px-[188px] text-blue border rounded-[5px] border-blue">
                Buy Now
              </button>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium ">Deluxe Package</p>
            <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px] xl:w-[457px]
             bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Upfront Payment</p>
                <p>N30.00</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment</p>
                <p>N0.00</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">N20.00</p>
              </div>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium">Executive Package</p>
            <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px]
            xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Initiate Payment</p>
                <p>N15,000</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment(12 months)</p>
                <p>N2150.00</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">N20.00</p>
              </div>
            </div>
            <p className="ml-[30px] mt-[20px] text-[20px] font-medium">Deluxe Package</p>
            <div className="mb-[30px] flex flex-col rounded-[10px] justify-between mt-[10px] 
              mx-auto w-[318px] xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
              <div className="flex justify-between border-b border-grey p-4">
                <p className="">Initiate Payment</p>
                <p>N5,000</p>
              </div>
              <div className="flex justify-between border-b border-grey p-3">
                <p>Monthly Payment</p>
                <p>N3,400</p>
              </div>
              <div className="flex justify-between p-3">
                <p>Convenience Fee<br/>(Per transaction)</p>
                <p className="pt-2">N20.00</p>
              </div>
            </div>
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
            <div className="text-[18px] xl:text-[20px] font-[450] mt-[29px] pb-8">
              Merchant can confirm that account has
              <br /> been credited.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
